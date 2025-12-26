import type { Review } from "@prisma/client";
import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

type CardReviewProps = {
  review: Review;
};

export default function CardReview({ review }: CardReviewProps) {
  return (
    <Card className="border p-4 rounded">
      <h2 className="font-semibold">{review.title}</h2>
      <p className="text-sm text-muted-foreground">
        {review.category} - Nota {review.rating}/5
      </p>
      <Link href={`/reviews/${review.id}`}>
        <Button>Ver detalhes</Button>
      </Link>
    </Card>
  );
}
