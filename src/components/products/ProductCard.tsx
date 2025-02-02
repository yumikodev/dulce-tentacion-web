import { Product } from "@/types/product";
import socials from "@/data/socials.json";
import LinkBtn from "../LinkBtn";
import { FaList, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";

type Props = Pick<Product, "id" | "name" | "price" | "category" | "img">;

function ProductCard({ id, category, img, name, price }: Props) {
  return (
    <div className="w-full bg-rose-200 rounded-2xl p-4 shadow">
      <Image src={img} alt={name} className="rounded-2xl" width={500} height={400} />

      <div className="mt-2">
        <h4 className="text-3xl text-wrap">{name}</h4>
        <p className="flex gap-1 text-4xl font-passion-one text-rose-950 mb-5">
          S/. {(price / 100).toFixed(2)}
          <span className="text-xl font-sans">c/u</span>
        </p>

        <div className="flex flex-wrap items-center gap-2 w-full">
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
          <LinkBtn url={`/products/${id}`} wFull>
            <FaList /> Detalles
          </LinkBtn>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
