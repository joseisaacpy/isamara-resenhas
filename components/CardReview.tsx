import type { ReviewCard } from "@/types/reviewCard";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { formatDate } from "@/lib/formatDate";

type CardReviewProps = {
  review: ReviewCard;
};

const MAX_RATING = 5;
export default function CardReview({ review }: CardReviewProps) {
  // formata as datas
  const createdAt = formatDate(review.createdAt);
  const updatedAt = formatDate(review.updatedAt);
  return (
    <Card className="border-2 border-red-500/50 p-4 rounded shadow-m simple-hover">
      <h2 className="text-2xl font-semibold">{review.title}</h2>
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
      <div className="flex gap-2 justify-between items-center">
        <Link href={`/reviews/${review.id}`}>
          <Button>Ver detalhes</Button>
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
    </Card>
  );
}
