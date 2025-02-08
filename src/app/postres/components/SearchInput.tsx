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
      className="animate-bounceIn mx-auto flex max-w-xl items-center rounded-3xl bg-rose-50 px-1 shadow"
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        name="search"
        placeholder="Buscar un postre..."
        className="w-full rounded-2xl px-3 py-2 outline-none"
        autoComplete="off"
      />
      <button
        type="submit"
        className="rounded-2xl bg-rose-500 p-2 text-rose-50"
      >
        <FiSearch />
      </button>
    </form>
  );
}
