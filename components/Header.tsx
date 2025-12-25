import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-red-700 pt-5 flex flex-col gap-2">
      <h1 className="title-primary font-bold text-white ml-5">Isamara Logo</h1>
      <nav className="bg-black text-white p-4 shadow-xl/30">
        <ul className="flex gap-6 items-center justify-center">
          <li className="text-xl font-bold">
            <Link href="/">Geral</Link>
          </li>
          <li className="text-xl font-bold">
            <Link href="/">Início</Link>
          </li>
          <li className="text-xl font-bold">
            <Link href="/">Testes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
