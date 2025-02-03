import { MouseEventHandler } from "react";

interface Props {
  filter: string;
  handleSwitch: MouseEventHandler<HTMLButtonElement>;
}

export default function CategorySwitcher({ filter, handleSwitch }: Props) {
  const buttons = [
    {
      label: "Con Azúcar",
      category: "general",
    },
    {
      label: "Con Stevia",
      category: "stevia",
    },
  ];
  return (
    <div
      id="category-selector"
      className="w-full flex gap-2 justify-center mt-6 mb-2"
    >
      {buttons.map(({ label, category }, key) => (
        <button
          key={key}
          className={`px-4 py-2 rounded-3xl border-2 border-rose-500 ${
            filter === category
              ? "bg-rose-50 text-rose-500"
              : "bg-rose-500 text-rose-50"
          } uppercase hover:bg-rose-600 hover:border-rose-600 hover:text-rose-50 transition-colors duration-500 shadow`}
          data-category={category}
          onClick={handleSwitch}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
