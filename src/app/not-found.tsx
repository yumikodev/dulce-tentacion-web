import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

function notFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center p-4 transition-all duration-300">
      <h1 className="animate-bounceIn mb-2 max-w-screen-md text-center text-5xl font-semibold text-rose-950">
        ¡Hey, creo que te perdiste!
      </h1>
      <p className="animate-bounceIn mb-4 text-rose-950">
        La página que estás buscando no existe.
      </p>

      <Link
        href="/"
        className="animate-bounceIn z-10 flex items-center justify-center gap-2 rounded-3xl bg-rose-50 px-6 py-3 font-semibold text-rose-950 uppercase shadow-[0px_2px_3px] shadow-black/50 transition-colors duration-300 hover:bg-rose-500 hover:text-rose-50"
      >
        <FiArrowLeft /> Regresar al inicio
      </Link>
    </div>
  );
}

export default notFound;
