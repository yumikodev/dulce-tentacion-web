import Link from "next/link";
import ItemsList from "./components/ItemsList";
import SearchInput from "./components/SearchInput";

interface Props {
  searchParams: Promise<Record<"search" | "category", string>>;
}

export default async function Postres({ searchParams }: Props) {
  const { search, category } = await searchParams;

  return (
    <div className="container mx-auto mt-20 w-full p-3">
      <SearchInput />

      {search && (
        <div>
          <p className="mt-2 text-center">Buscando: {search}</p>
          <Link
            href="/postres"
            className="mt-0.5 block text-center text-rose-700 underline"
          >
            Reiniciar busqueda
          </Link>
        </div>
      )}
      <ItemsList search={search} category={category} />
    </div>
  );
}
