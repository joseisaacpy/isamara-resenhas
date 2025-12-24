import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  // pega o id da sessão
  const sessionId = request.cookies.get("session_id")?.value;

  // tentando acessar área privada sem cookie
  if (!sessionId) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  //   busca a session no banco
  const session = await prisma.session.findUnique({
    where: {
      id: sessionId,
    },
  });

  // se não existir session ou a session estiver expirada
  if (!session || session.expiresAt < new Date()) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // se existir session, passa
  return NextResponse.next();
}

export const config = {
  matcher: ["/(private)/:path*"],
};
