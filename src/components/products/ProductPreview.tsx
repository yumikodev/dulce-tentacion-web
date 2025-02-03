"use client";

import Subtitle from "@/components/Subtitle";
import data from "@/data/products.json";
import ProductCard from "./ProductCard";
import { MouseEvent, useState } from "react";
import CategorySwitcher from "@/app/postres/components/CategorySwitcher";

function ProductPreview() {
  const [filter, setFilter] = useState<"general" | "stevia">("general");

  const handleSwitch = (e: MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.getAttribute("data-category") as
      | "general"
      | "stevia";

    if (category) setFilter(category);
  };

  return (
    <section id="products" className="p-4 w-full">
      <div className="container mx-auto">
        <Subtitle> Productos </Subtitle>

        <div className="w-full h-0.5 bg-linear-90 from-transparent via-rose-950 via-50% to-transparent"></div>

        <CategorySwitcher filter={filter} handleSwitch={handleSwitch} />

        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-3 mt-5 max-w-screen-xl mx-auto">
          {data
            .filter((p) => p.category === filter)
            .slice(0, 6)
            .map(({ category, id, name, price, img }) => (
              <ProductCard
                key={id}
                id={id}
                img={img}
                category={category}
                name={name}
                price={price}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;
