"use client";

import { useState } from "react";
import CardReview from "@/components/CardReview";
import type { ReviewCard } from "@/types/reviewCard";
import SelectCategory from "@/components/SelectCategory";

type Props = {
  reviews: ReviewCard[];
};

export default function BlogClient({ reviews }: Props) {
  const [category, setCategory] = useState("Todas");

  const filteredReviews =
    category === "Todas"
      ? reviews
      : reviews.filter((review) => review.category === category);
  return (
    <section className="section-container">
      <h1 className="title-primary">
        Seja bem-vindo(a) ao meu blog de resenhas
      </h1>

      <SelectCategory
        categories={["Todas", ...new Set(reviews.map((r) => r.category))]}
        selected={category}
        onSelect={setCategory}
      />

      <section>
        {/* se nenhuma review for cadastrada */}
        {filteredReviews.length === 0 && <h2>Não há resenhas cadastradas.</h2>}
        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* se houver resenhas cadastradas */}
          {filteredReviews.map((review) => (
            <CardReview key={review.id} review={review} />
          ))}
        </section>
      </section>
    </section>
  );
}
