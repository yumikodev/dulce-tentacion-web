import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  url: string;
  external?: boolean;
  wFull?: boolean;
  children: ReactNode;
}

function LinkBtn({ children, url, external, wFull }: Props) {
  return (
    <Link
      className={`px-6 py-3 flex ${
        wFull && "w-full"
      } gap-2 items-center justify-center uppercase rounded-3xl font-semibold transition-colors duration-300 bg-rose-50 text-rose-950 hover:bg-rose-500 hover:text-rose-50 shadow-[0px_2px_3px] shadow-black/50 z-10`}
      href={url}
      {...(external && { target: "_blank" })}
    >
      {children}
    </Link>
  );
}

export default LinkBtn;
