import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Subtitle({ children }: Props) {
  return (
    <h2 className="text-5xl text-rose-950 text-center font-passion-one">
      {children}
    </h2>
  );
}

export default Subtitle;
