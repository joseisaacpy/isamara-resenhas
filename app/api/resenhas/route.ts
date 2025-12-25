import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const resenhas = await prisma.review.findMany();
    return NextResponse.json({
      data: resenhas,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      data: "Ocorreu um erro ao buscar as resenhas",
      status: 500,
    });
  }
}
