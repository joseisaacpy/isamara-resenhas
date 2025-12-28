import { prisma } from "@/lib/prisma";
import type { ReviewCard } from "@/types/reviewCard";
import CardReviewAdmin from "@/components/CardReviewAdmin";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// força a atualização da página
export const dynamic = "force-dynamic";

export default async function Painel() {
  const reviews: ReviewCard[] = await prisma.review.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      category: true,
      rating: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  return (
    <section className="section-container">
      <h1 className="title-primary">Painel de Controle</h1>
      {reviews.length === 0 && (
        <div className="flex flex-col gap-2">
          <h2>Não há resenhas cadastradas</h2>
          <Link href="/painel/nova">
            <Button>Cadastrar primeira resenha?</Button>
          </Link>
        </div>
      )}
      <section className="grid gap-4 md:grid-cols-2">
        {/* se houver resenhas cadastradas */}
        {reviews.map((review) => (
          <CardReviewAdmin key={review.id} review={review} />
        ))}
      </section>
    </section>
  );
}
