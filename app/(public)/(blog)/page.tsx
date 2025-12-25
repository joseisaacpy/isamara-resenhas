import { prisma } from "@/lib/prisma";

export default async function Blog() {
  const reviews = await prisma.review.findMany();
  return (
    <section>
      <h1>Seja bem-vindo ao meu Blog de resenhas</h1>
      <section>
        {/* se nenhuma review for cadastrada */}
        {reviews.length === 0 && <h2>Não há resenhas cadastradas</h2>}
        {/* se houver resenhas cadastradas */}
        {reviews.map((review) => (
          <div key={review.id} className="border p-4 rounded">
            <h2 className="font-semibold">{review.title}</h2>
            <p className="text-sm text-muted-foreground">
              {review.category} - Nota {review.rating}/10
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
