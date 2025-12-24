import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  // pega as credenciais do usuário pela request
  const { email, password } = await request.json();
  // verifica se o usuário existe
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  // se o usuário não existir, retorna um erro
  if (!user) {
    return NextResponse.json(
      { message: "Credenciais inválidas" },
      { status: 404 }
    );
  }

  // verifica se a senha está correta
  const passwordMatch = await bcrypt.compare(password, user.password);
  // se a senha não estiver correta, retorna um erro
  if (!passwordMatch) {
    return NextResponse.json(
      { message: "Credenciais inválidas" },
      { status: 404 }
    );
  }
  // se a senha estiver correta, cria uma sessão
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24), // 24h
    },
  });
  // cria o cookie HTTP-only
  (await cookies()).set("session_id", session.id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });

  // 3️⃣ resposta de sucesso
  return NextResponse.json({ message: "Login realizado com sucesso" });
}
