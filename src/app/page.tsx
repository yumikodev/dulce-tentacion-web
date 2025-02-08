import Hero from "@/components/Hero";
import ProductPreview from "@/components/products/ProductPreview";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <div>
      <Hero />

      <a
        href="#products"
        className="sticky bottom-6 left-1/2 z-20 mx-auto my-6 inline-block -translate-x-1/2 animate-bounce rounded-full bg-rose-500 p-1 text-rose-50 shadow-[0px_2px_4px_#000000cc]"
      >
        <FiArrowDown className="h-8 w-8" />
      </a>

      <ProductPreview />
    </div>
  );
}
