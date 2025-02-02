import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

function notFound() {
  return (
    <div className="h-dvh flex flex-col items-center justify-center p-4 transition-all duration-300">
      <h1 className="text-5xl font-semibold text-rose-950 text-center max-w-screen-md mb-2 animate-bounceIn">
        ¡Hey, creo que te perdiste!
      </h1>
      <p className="text-rose-950 mb-4 animate-bounceIn">
        La página que estás buscando no existe.
      </p>

      <Link
        href="/"
        className="px-6 py-3 flex gap-2 items-center justify-center uppercase rounded-3xl font-semibold transition-colors duration-300 bg-rose-50 text-rose-950 hover:bg-rose-500 hover:text-rose-50 shadow-[0px_2px_3px] shadow-black/50 z-10 animate-bounceIn"
      >
        <FiArrowLeft /> Regresar al inicio
      </Link>
    </div>
  );
}

export default notFound;
