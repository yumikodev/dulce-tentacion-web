import NotFound from "@/app/not-found";
import data from "@/data/products.json";

interface Props {
  params: Promise<Record<"id", string>>;
}

export default async function Postre({ params }: Props) {
  const { id } = await params;

  const postreIndex = data.findIndex((p) => p.id === Number(id));

  if (postreIndex === -1) return <NotFound />;

  return (
    <div className="container p-3 mt-20 w-full mx-auto">
      Postre por id: {id}
    </div>
  );
}
