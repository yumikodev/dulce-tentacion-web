import { Product } from "@/types/product";
import socials from "@/data/socials.json";
import LinkBtn from "../LinkBtn";
import { FaList, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import { useRef } from "react";
import { useIsVisible } from "@/hooks/isVisible";
import { FiAlertCircle } from "react-icons/fi";

type Props = Pick<Product, "id" | "name" | "price" | "category" | "img">;

function ProductCard({ id, category, img, name, price }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <div
      ref={ref}
      className={`z-10 flex w-full flex-col justify-between gap-3 rounded-3xl bg-rose-200 p-4 shadow ${
        isVisible ? "animate-fadeInLeft" : "opacity-0"
      }`}
    >
      <div className="grid grid-cols-1 grid-rows-[160px_1fr]">
        <Image
          src={img}
          alt={name}
          className="h-full max-h-56 w-full rounded-2xl object-cover"
          width={500}
          height={400}
        />

        <div className="mt-1">
          <h4 className="text-3xl text-wrap">{name}</h4>
          <p className="font-passion-one mb-2 flex gap-1 text-4xl text-rose-950">
            S/. {(price[0] / 100).toFixed(2)}
          </p>

          {/* alert */}
          <div className="grid grid-cols-[auto_1fr] items-center gap-2 rounded-2xl bg-rose-800 px-3 py-2 text-rose-50">
            <FiAlertCircle /> Los pedidos deben realizarse con mínimo 1 día de
            anticipación.
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex w-full flex-wrap items-center gap-2">
        <LinkBtn
          url={
            `${socials[0].link}?` +
            new URLSearchParams({
              text: `Hola, he revisado su catálogo y me interesa comprar *${name}* (${category}).`,
            })
          }
          external
          wFull
        >
          <FaWhatsapp /> Comprar
        </LinkBtn>
        <LinkBtn url={`/postres/${id}`} wFull>
          <FaList /> Detalles
        </LinkBtn>
      </div>
    </div>
  );
}

export default ProductCard;
