import "dotenv/config";

import { Prisma } from "@prisma/client";

export const reviews: Prisma.ReviewCreateInput[] = [
  {
    title: "Hábitos Atômicos",
    content:
      "Livro de auto ajuda que te ajudará a desenvolver um estilo de vida saudável.",
    rating: 5,
    category: "LIVRO",
    imageUrl: "https://m.media-amazon.com/images/I/81F90H7hnML._AC_SL1500_.jpg",
  },
  {
    title: "Os Sete Maridos de Evelyn Hugo",
    content:
      "História envolvente sobre fama, identidade e os bastidores de uma vida intensa.",
    rating: 5,
    category: "LIVRO",
    imageUrl:
      "https://static.wixstatic.com/media/742ca6_e238bc514a214178bc1e568a22b2ecee~mv2.png/v1/fill/w_568,h_816,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/742ca6_e238bc514a214178bc1e568a22b2ecee~mv2.png",
  },
  {
    title: "Pessoas Normais",
    content:
      "Narrativa sensível sobre amadurecimento, conexões emocionais e inseguranças.",
    rating: 5,
    category: "LIVRO",
    imageUrl:
      "https://m.media-amazon.com/images/I/4128BOZ-OhL._SY445_SX342_ML2_.jpg",
  },
];

import { prisma } from "../lib/prisma.ts";

async function main() {
  for (const review of reviews) {
    await prisma.review.create({
      data: review,
    });
  }
}

main()
  .then(() => console.log("Reviews criadas com sucesso!"))
  .catch(console.error)
  .finally(() => prisma.$disconnect());
