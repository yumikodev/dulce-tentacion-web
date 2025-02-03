"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler } from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  const params = useSearchParams();
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const search = data.get("search");
    const category = params.get("category");

    if (!search) return;

    const searchParams = new URLSearchParams({
      ...(category && { category }),
      search: search.toString(),
    });

    router.push("/postres?" + searchParams.toString());
  };

  return (
    <form
      className="bg-rose-50 flex items-center px-1 rounded-3xl max-w-xl mx-auto shadow animate-bounceIn"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="search"
        placeholder="Buscar un postre..."
        className="px-3 py-2 outline-none w-full rounded-2xl"
      />
      <button
        type="submit"
        className="text-rose-50 bg-rose-500 p-2 rounded-2xl"
      >
        <FiSearch />
      </button>
    </form>
  );
}
