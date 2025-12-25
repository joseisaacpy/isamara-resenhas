import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  const sessionId = (await cookies()).get("session_id")?.value;

  if (sessionId) {
    await prisma.session.delete({
      where: { id: sessionId },
    });
  }

  (await cookies()).delete("session_id");
  return NextResponse.redirect(new URL("/login", request.url));
}
