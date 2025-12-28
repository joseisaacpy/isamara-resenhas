import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type ReviewPageProps = {
  params: {
    id: string;
  };
};

const MAX_RATING = 5;
export default async function ReviewPage({ params }: ReviewPageProps) {
  const { id } = await params;
  // busca a review
  const review = await prisma.review.findUnique({
    where: { id: id },
  });

  //   se não existir essa review
  if (!review) {
    notFound();
  }

  // formata as datas
  const createdAt = formatDate(review.createdAt);
  const updatedAt = formatDate(review.updatedAt);

  // retorna a página de review
  return (
    <section className="section-container-post">
      <h1 className="text-2xl font-bold">{review.title}</h1>
      {/* imagem da review ou o placeholder */}
      <Image
        src={review.imageUrl || "/assets/images/sem-imagem.svg"}
        alt={review.title}
        width={500}
        height={500}
        className="rounded-md shadow-2xl/20 w-full"
      />
      <p className="text-sm text-muted-foreground">{review.category}</p>

      <div className="flex items-center gap-1">
        {Array.from({ length: MAX_RATING }).map((_, index) => (
          <Star
            key={index}
            size={20}
            className={
              index < review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }
          />
        ))}
      </div>

      <article className="prose prose-neutral max-w-none">
        <p>{review.content}</p>
      </article>

      <div className="flex justify-between items-center gap-2">
        {/* botão de voltar */}
        <Link href={"/"}>
          <Button>Voltar</Button>
        </Link>
        {/* div com datas de criação e atualização */}
        <div className="flex flex-col gap-1 items-end justify-center">
          <p className="text-xs text-muted-foreground">
            Criado em: {createdAt}
          </p>
          <p className="text-xs text-muted-foreground">
            Atualizado em: {updatedAt}
          </p>
        </div>
      </div>
    </section>
  );
}
