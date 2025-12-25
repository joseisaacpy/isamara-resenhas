export default function Loader() {
  return (
    <section className="min-h-screen flex justify-center items-center flex-col gap-4">
      <div className="h-20 w-20 border-8 border-red-700 border-b-black border-r-black rounded-full animate-spin"></div>
      <h1 className="text-primary">Carregando...</h1>
    </section>
  );
}
