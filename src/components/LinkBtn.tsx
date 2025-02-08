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
      className={`flex px-6 py-3 ${
        wFull && "w-full"
      } z-10 items-center justify-center gap-2 rounded-3xl bg-rose-50 font-semibold text-rose-950 uppercase shadow-[0px_2px_3px] shadow-black/50 transition-colors duration-300 hover:bg-rose-500 hover:text-rose-50`}
      href={url}
      {...(external && { target: "_blank" })}
    >
      {children}
    </Link>
  );
}

export default LinkBtn;
