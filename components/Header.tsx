import Link from "next/link";
import { cookies } from "next/headers";
import { User2 } from "lucide-react";
import LogoutButton from "./LogoutButton";

export default async function Header() {
  // instancia os cookies
  const cookieStore = cookies();
  // verifica se o usuário está autenticado
  const session = (await cookieStore).get("session_id")?.value;
  // transforma em boolean se tiver uma sessão
  const isAuthenticated = !!session;
  return (
    <header className="bg-red-700 px-6 py-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        {/* title do site com link */}
        <Link href="/" className="title-primary text-white">
          📑 Isamara Resenhas
        </Link>

        {/* condicional para verificar se o usuário está autenticado */}
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <Link href="/login">
            <User2 className="text-white w-6 h-6" />
          </Link>
        )}
      </nav>
    </header>
  );
}
