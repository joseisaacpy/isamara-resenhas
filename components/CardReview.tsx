import type { Review } from "@prisma/client";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

type CardReviewProps = {
  review: Review;
};

export default function CardReview({ review }: CardReviewProps) {
  const MAX_RATING = 5;
  return (
    <Card className="border p-4 rounded shadow-m simple-hover">
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
      <Link href={`/reviews/${review.id}`}>
        <Button>Ver detalhes</Button>
      </Link>
    </Card>
  );
}
