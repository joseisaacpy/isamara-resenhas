import type { Review } from "@prisma/client";
import { Card } from "./ui/card";

type CardReviewProps = {
  review: Review;
};

export default function CardReview({ review }: CardReviewProps) {
  return (
    <Card key={review.id} className="border p-4 rounded">
      <h2 className="font-semibold">{review.title}</h2>
      <p className="text-sm text-muted-foreground">
        {review.category} - Nota {review.rating}/10
      </p>
    </Card>
  );
}
