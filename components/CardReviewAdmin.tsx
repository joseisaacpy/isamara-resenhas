"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatDate } from "@/lib/formatDate";
import type { ReviewCard } from "@/types/reviewCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Edit2, Star, Trash2 } from "lucide-react";

type CardReviewProps = {
  review: ReviewCard;
};

const MAX_RATING = 5;
export default function CardReview({ review }: CardReviewProps) {
  const router = useRouter();
  // função para lidar com o deletar
  async function handleDelete() {
    try {
      const response = await fetch(`/api/reviews/${review.id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Ocorreu um erro ao deletar a resenha");
      }
      toast.success("Resenha deletada com sucesso!");
      router.refresh();
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro ao deletar a resenha");
    }
  }
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
      <div className="flex flex-col md:flex-row gap-2 justify-between items-center">
        {/* botão de editar e deletar */}
        <div className="flex gap-2">
          <Button variant="destructive" onClick={handleDelete}>
            <Trash2 />
          </Button>
          <Link href={`/painel/editar/${review.id}`}>
            <Button>
              <Edit2 />
            </Button>
          </Link>
        </div>

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
