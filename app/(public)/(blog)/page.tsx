import { prisma } from "@/lib/prisma";
import CardReview from "@/components/CardReview";
import type { ReviewCard } from "@/types/reviewCard";

export default async function Blog() {
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
    }
  });
  return (
    <section className="flex flex-col gap-4 max-w-7xl mx-auto p-4 pt-5">
      <h1 className="title-primary">
        Seja bem-vindo(a) ao meu blog de resenhas
      </h1>
      <section>
        {/* se nenhuma review for cadastrada */}
        {reviews.length === 0 && <h2>Não há resenhas cadastradas</h2>}
        <section className="grid gap-4 md:grid-cols-2">
          {/* se houver resenhas cadastradas */}
          {reviews.map((review) => (
            <CardReview key={review.id} review={review} />
          ))}
        </section>
      </section>
    </section>
  );
}
