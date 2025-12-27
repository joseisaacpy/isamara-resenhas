import type { Category } from "@prisma/client";

export type ReviewCard = {
  id: string;
  title: string;
  content: string;
  imageUrl: string | null;
  category: Category;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
};
