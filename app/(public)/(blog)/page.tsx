import { prisma } from "@/lib/prisma";
import type { ReviewCard } from "@/types/reviewCard";
import BlogClient from "./BlogClient";

// força a atualização da página
export const dynamic = "force-dynamic";

export default async function page() {
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
  return <BlogClient reviews={reviews} />;
}
