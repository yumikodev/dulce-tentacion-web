"use client";

import LinkBtn from "@/components/LinkBtn";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { GiCubes, GiThreeLeaves } from "react-icons/gi";
import data from "@/data/products.json";
import socials from "@/data/socials.json";
import { useState } from "react";

interface Props {
  index: number;
}

export function Details({ index }: Props) {
  const [priceIndex, setPriceIndex] = useState(0);
  const { description, img, name, category, price, availability } = data[index];

  return (
    <div className="grid grid-cols-1 grid-rows-2 items-center max-w-screen-lg gap-2 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5 mb-6 mx-auto">
      {/* Image preview */}
      <div className="relative rounded-2xl w-full h-60 overflow-hidden lg:h-full">
        <span className="absolute top-0 left-0 bg-rose-950/50 backdrop-blur-2xl rounded-br-2xl">
          <div className="flex items-center gap-2 px-3 py-2 text-rose-50">
            {category === "general" ? (
              <>
                <GiCubes /> Con azúcar
              </>
            ) : (
              <>
                <GiThreeLeaves /> Con Stevia
              </>
            )}
          </div>
        </span>
        <Image
          src={img}
          alt={name}
          width={500}
          height={180}
          className="w-full h-60 object-cover lg:h-full"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="mb-1">{description}</p>

        <p className="flex gap-1 text-4xl font-passion-one text-rose-950 mb-2">
          S/. {(price[priceIndex] / 100).toFixed(2)}
          <span className="text-xl font-sans">c/u</span>
        </p>

        <h2 className="text-xl mb-1">Disponibilidad:</h2>
        <ul className="flex gap-2 mb-3">
          {availability.map((label, key) => (
            <li
              key={key}
              className={`px-3 py-1 rounded-3xl cursor-pointer ${
                priceIndex === key ? "bg-rose-950" : "bg-rose-800"
              } hover:bg-rose-900 text-rose-50 transition-colors duration-300`}
              onClick={() => setPriceIndex(key)}
            >
              {label}
            </li>
          ))}
        </ul>

        <LinkBtn
          url={
            `${socials[0].link}?` +
            new URLSearchParams({
              text: `Hola, he revisado su catálogo y me interesa comprar *${name}* (${category}).`,
            })
          }
          external
          wFull
        >
          <FaWhatsapp /> Comprar
        </LinkBtn>
      </div>
    </div>
  );
}
