import { prisma } from "@/lib/prisma";
import CardReview from "@/components/CardReview";

export default async function Blog() {
  const reviews = await prisma.review.findMany();
  return (
    <section className="flex flex-col gap-4 max-w-7xl mx-auto p-4 pt-5">
      <h1 className="title-primary">
        Seja bem-vindo(a) ao meu blog de resenhas
      </h1>
      <section>
        {/* se nenhuma review for cadastrada */}
        {reviews.length === 0 && <h2>Não há resenhas cadastradas</h2>}
        {/* se houver resenhas cadastradas */}
        {reviews.map((review) => (
          <CardReview key={review.id} review={review} />
        ))}
      </section>
    </section>
  );
}
