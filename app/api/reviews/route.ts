import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

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

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const novaReview = await prisma.review.create({
      data: body,
    });
    return NextResponse.json({
      data: novaReview,
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Ocorreu um erro ao criar a resenha",
      status: 500,
    });
  }
}
