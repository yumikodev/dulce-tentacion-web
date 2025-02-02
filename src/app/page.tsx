import Hero from "@/components/Hero";
import ProductPreview from "@/components/products/ProductPreview";
import { FiArrowDown } from "react-icons/fi";

export default function Home() {
  return (
    <>
      <Hero />

      <a
        href="#products"
        className="sticky inline-block bottom-6 p-1 left-1/2 mx-auto my-6 rounded-full bg-rose-500 text-rose-50 -translate-x-1/2 animate-bounce shadow-[0px_2px_4px_#000000cc] z-20"
      >
        <FiArrowDown className="w-8 h-8" />
      </a>

      <ProductPreview />
    </>
  );
}
