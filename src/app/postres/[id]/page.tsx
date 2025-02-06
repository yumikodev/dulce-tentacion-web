import NotFound from "@/app/not-found";
import ProductPreview from "@/components/products/ProductPreview";
import data from "@/data/products.json";
import { Details } from "../components/Details";

interface Props {
  params: Promise<Record<"id", string>>;
}

export default async function Postre({ params }: Props) {
  const { id } = await params;

  const postreIndex = data.findIndex((p) => p.id === Number(id));

  if (postreIndex === -1) return <NotFound />;



  return (
    <div className="container p-3 mt-20 w-full mx-auto">
      <Details index={postreIndex} />
      <ProductPreview />
    </div>
  );
}
