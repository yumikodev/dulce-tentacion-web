import LinkBtn from "./LinkBtn";

function Hero() {
  return (
    <main className="relative flex h-dvh flex-col items-center justify-center gap-6 overflow-hidden bg-[url(/imgs/hero-img.avif)] bg-cover bg-center px-3 transition-all duration-300 sm:px-6 md:px-8">
      <div className="absolute inset-0 bg-black/60"></div>

      <h1 className="animate-fadeInDown font-passion-one z-10 max-w-screen-lg bg-linear-120 from-rose-50 to-rose-500 to-80% bg-clip-text text-center text-6xl text-transparent md:text-8xl xl:text-9xl">
        Postres clásicos, reinventados para ti
      </h1>

      <div className="animate-fadeInDown flex flex-wrap items-center justify-center gap-3">
        <LinkBtn url="/postres"> Ver catálogo</LinkBtn>
        <LinkBtn url="#footer"> Contacto</LinkBtn>
      </div>

      <div className="absolute -bottom-5 left-0 h-10 w-full rounded-[100%] bg-rose-100 md:-bottom-8 md:h-16 xl:-bottom-12 xl:h-24 2xl:-bottom-20 2xl:h-40"></div>
    </main>
  );
}

export default Hero;
