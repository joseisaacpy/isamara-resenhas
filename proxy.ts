import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

const REDIRECT_WHEN_NOT_AUTHENTICATED = "/login";

const publicRoutes = [
  {
    path: "/login", // página do admin logar
    whenAuthenticated: "redirect",
  },
  {
    path: "/", // paginas dos visitantes
    whenAuthenticated: "next",
  },
] as const;

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find((route) => route.path === path);
  const sessionId = request.cookies.get("session_id")?.value;

  // se o token não existir e for uma rota publica
  if (!sessionId && publicRoute) {
    // next
    return NextResponse.next();
  }

  // se o token não existir e não for uma rota publica
  if (!sessionId && !publicRoute) {
    // redireciona para a rota de login
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED;
    return NextResponse.redirect(redirectURL);
  }

  // se o token existir e for uma rota publica
  if (sessionId && publicRoute?.whenAuthenticated === "redirect") {
    // redireciona para a rota de dashboard
    const redirectURL = request.nextUrl.clone();
    redirectURL.pathname = "/painel";
    return NextResponse.redirect(redirectURL);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
