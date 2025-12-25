export default function Footer() {
  return (
    <footer className="p-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-center bg-red-700 text-white">
      <p className="text-lg font-bold">Isamara Resenhas</p>
      <p>
        Desenvolvido por{" "}
        <a
          href="https://github.com/joseisaacpy"
          target="_blank"
          rel="noreferrer"
          className="underline font-bold"
        >
          joseisaacpy
        </a>
      </p>
    </footer>
  );
}
