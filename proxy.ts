import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const PRIVATE_ROUTE = "/painel";

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const sessionId = request.cookies.get("session_id")?.value;
  const isPrivateRoute = path === PRIVATE_ROUTE;

  // Não autenticado tentando acessar rota privada
  if (!sessionId && isPrivateRoute) {
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = "/login";
    return NextResponse.redirect(redirectURL);
  }

  // Autenticado tentando acessar login
  if (sessionId && path === "/login") {
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = "/painel";
    return NextResponse.redirect(redirectURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
