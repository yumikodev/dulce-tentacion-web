import LinkBtn from "./LinkBtn";

function Hero() {
  return (
    <main className="px-3 flex flex-col gap-6 justify-center items-center h-dvh bg-[url(/imgs/hero-img.avif)] bg-cover bg-center relative overflow-hidden transition-all duration-300 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="text-6xl font-passion-one max-w-screen-lg bg-linear-120 from-rose-50 to-rose-500 to-80% bg-clip-text text-transparent text-center z-10 md:text-8xl xl:text-9xl">
        Postres clásicos, reinventados para ti
      </h1>

      <div className="flex gap-3 flex-wrap items-center justify-center">
        <LinkBtn url="/productos"> Ver catálogo</LinkBtn>
        <LinkBtn url="#contacto"> Contacto</LinkBtn>
      </div>

      <div className="absolute left-0 -bottom-5 w-full h-10 rounded-[100%] bg-rose-100 md:h-16 md:-bottom-8 xl:h-24 xl:-bottom-12 2xl:h-40 2xl:-bottom-20"></div>
    </main>
  );
}

export default Hero;
