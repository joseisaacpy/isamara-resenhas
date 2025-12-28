import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const review = await prisma.review.findUnique({
      where: { id: id },
    });

    if (!review) {
      return NextResponse.json({
        error: "Resenha não encontrada",
        status: 404,
      });
    }

    return NextResponse.json({
      data: review,
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Ocorreu um erro ao buscar a resenha",
      status: 500,
    });
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const review = await prisma.review.findUnique({
      where: { id: id },
    });

    if (!review) {
      return NextResponse.json({
        error: "Resenha não encontrada",
        status: 404,
      });
    }

    await prisma.review.delete({
      where: { id: id },
    });

    return NextResponse.json({
      message: "Resenha deletada com sucesso!",
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: "Ocorreu um erro ao deletar a resenha",
      status: 500,
    });
  }
}
