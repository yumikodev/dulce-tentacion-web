"use client";

import { MouseEvent, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import CategorySwitcher from "@/app/postres/components/CategorySwitcher";
import Subtitle from "@/components/Subtitle";
import data from "@/data/products.json";
import ProductCard from "./ProductCard";
import LinkBtn from "../LinkBtn";

function ProductPreview() {
  const [filter, setFilter] = useState<string>("general");

  const handleSwitch = (e: MouseEvent<HTMLButtonElement>) => {
    const category = e.currentTarget.getAttribute("data-category");

    if (category) setFilter(category);
  };

  return (
    <section id="products" className="w-full p-4">
      <div className="container mx-auto">
        <Subtitle> Productos </Subtitle>

        <div className="h-0.5 w-full bg-linear-90 from-transparent via-rose-950 via-50% to-transparent"></div>

        <CategorySwitcher filter={filter} handleSwitch={handleSwitch} />

        <div className="xs:grid-cols-2 mx-auto mt-5 grid max-w-screen-xl grid-cols-1 gap-3 md:grid-cols-3">
          {data
            .filter((p) => p.category === filter)
            .slice(0, 3)
            .map(({ category, id, name, price, img }, key) => (
              <ProductCard
                key={key}
                id={id}
                img={img}
                category={category}
                name={name}
                price={price}
              />
            ))}
        </div>

        <div className="mx-auto mt-6 max-w-xl">
          <LinkBtn url={`/postres?category=${filter}`}>
            Ver la lista completa <FiArrowRight />
          </LinkBtn>
        </div>
      </div>
    </section>
  );
}

export default ProductPreview;
