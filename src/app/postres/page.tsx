import Link from "next/link";
import ItemsList from "./components/ItemsList";
import SearchInput from "./components/SearchInput";

interface Props {
  searchParams: Promise<Record<"search" | "category", string>>;
}

export default async function Postres({ searchParams }: Props) {
  const { search, category } = await searchParams;

  return (
    <div className="container p-3 mt-20 w-full mx-auto">
      <SearchInput />

      {search && (
        <div>
          <p className="text-center mt-2">Buscando: {search}</p>
          <Link
            href="/postres"
            className="block text-center text-rose-700 underline mt-0.5"
          >
            Reiniciar busqueda
          </Link>
        </div>
      )}
      <ItemsList search={search} category={category} />
    </div>
  );
}
