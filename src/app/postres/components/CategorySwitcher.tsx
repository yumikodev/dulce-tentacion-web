import { MouseEventHandler } from "react";

interface Props {
  filter: string;
  handleSwitch: MouseEventHandler<HTMLButtonElement>;
}

export default function CategorySwitcher({ filter, handleSwitch }: Props) {
  return (
    <div
      id="category-selector"
      className="w-full flex gap-2 justify-center mt-6 mb-2"
    >
      <button
        className={`px-4 py-2 rounded-3xl border-2 border-rose-500 ${
          filter === "general"
            ? "bg-rose-50 text-rose-500"
            : "bg-rose-500 text-rose-50"
        } uppercase hover:bg-rose-600 hover:border-rose-600 transition-colors duration-500 shadow`}
        data-category="general"
        onClick={handleSwitch}
      >
        Con Azúcar
      </button>
      <button
        className={`px-4 py-2 rounded-3xl border-2 border-rose-500 ${
          filter === "stevia"
            ? "bg-rose-50 text-rose-500"
            : "bg-rose-500 text-rose-50"
        } uppercase hover:bg-rose-600 hover:border-rose-600 transition-colors duration-500 shadow`}
        data-category="stevia"
        onClick={handleSwitch}
      >
        Con Stevia
      </button>
    </div>
  );
}
