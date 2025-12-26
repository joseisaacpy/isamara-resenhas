import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type ReviewPageProps = {
  params: {
    id: string;
  };
};

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
  // retorna a página de review
  return (
    <section className="max-w-3xl mx-auto p-4 pt-6 space-y-4">
      <h1 className="text-2xl font-bold">{review.title}</h1>

      <p className="text-sm text-muted-foreground">
        {review.category} · Nota {review.rating}/10
      </p>

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
