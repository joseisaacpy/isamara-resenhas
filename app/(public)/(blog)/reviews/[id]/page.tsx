import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

type ReviewPageProps = {
  params: {
    id: string;
  };
};

export default async function ReviewPage({ params }: ReviewPageProps) {
  const MAX_RATING = 5;
  const { id } = await params;
  // busca a review
  const review = await prisma.review.findUnique({
    where: { id: id },
  });

  //   se não existir essa review
  if (!review) {
    notFound();
  }
  // retorna a página de review
  return (
    <section className="max-w-3xl mx-auto p-4 pt-6 space-y-4">
      <h1 className="text-2xl font-bold">{review.title}</h1>

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

      {/* botão de voltar */}
      <Link href={"/"}>
        <Button>Voltar</Button>
      </Link>
    </section>
  );
}
