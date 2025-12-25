import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const reviews = await prisma.review.findMany();
    return NextResponse.json({
      data: reviews,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Ocorreu um erro ao buscar as resenhas",
      status: 500,
    });
  }
}
