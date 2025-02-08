import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Subtitle({ children }: Props) {
  return (
    <h2 className="font-passion-one text-center text-5xl text-rose-950">
      {children}
    </h2>
  );
}

export default Subtitle;
