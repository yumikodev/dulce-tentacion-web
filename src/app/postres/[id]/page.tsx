import NotFound from "@/app/not-found";
import LinkBtn from "@/components/LinkBtn";
import ProductPreview from "@/components/products/ProductPreview";
import data from "@/data/products.json";
import socials from "@/data/socials.json";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { GiCubes, GiThreeLeaves } from "react-icons/gi";

interface Props {
  params: Promise<Record<"id", string>>;
}

export default async function Postre({ params }: Props) {
  const { id } = await params;

  const postreIndex = data.findIndex((p) => p.id === Number(id));

  if (postreIndex === -1) return <NotFound />;

  const { description, img, name, category, details, price } =
    data[postreIndex];

  return (
    <div className="container p-3 mt-20 w-full mx-auto">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:gap-4 mb-6">
        <div className="relative rounded-2xl overflow-hidden">
          <span className="absolute top-0 left-0 bg-rose-50/50 backdrop-blur-2xl rounded-br-2xl">
            <div className="flex items-center gap-2 px-3 py-2 text-rose-950">
              {category === "general" ? (
                <>
                  <GiCubes /> Con azúcar
                </>
              ) : (
                <>
                  <GiThreeLeaves /> Con Stevia
                </>
              )}
            </div>
          </span>
          <Image src={img} alt={name} width={500} height={180} />
        </div>

        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>
          <p className="mb-1">{description}</p>

          <p className="flex gap-1 text-4xl font-passion-one text-rose-950 mb-5">
            S/. {(price / 100).toFixed(2)}
            <span className="text-xl font-sans">c/u</span>
          </p>

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

          <details className="mt-3 bg-rose-50 px-3 py-2 rounded-3xl shadow-[0px_2px_3px] shadow-black/50 transition-all duration-300">
            <summary className="bg-rose-50 cursor-pointer">Detalles</summary>

            <ul className="list-disc list-inside">
              {details.map((text, key) => (
                <li key={key}>{text}</li>
              ))}
            </ul>
          </details>
        </div>
      </div>

      <ProductPreview />
    </div>
  );
}
