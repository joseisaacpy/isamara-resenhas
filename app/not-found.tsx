import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <h1>Ops, página não encontrada!</h1>
      <Link href="/">Voltar para a página inicial</Link>
    </section>
  );
}
