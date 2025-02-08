"use client";

import LinkBtn from "@/components/LinkBtn";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";
import { GiCubes, GiThreeLeaves } from "react-icons/gi";
import data from "@/data/products.json";
import socials from "@/data/socials.json";
import { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

interface Props {
  index: number;
}

export function Details({ index }: Props) {
  const [priceIndex, setPriceIndex] = useState(0);
  const { description, img, name, category, price, availability } = data[index];

  return (
    <div className="animate-bounceIn mx-auto mb-6 grid max-w-screen-lg grid-cols-1 grid-rows-2 items-center gap-2 sm:grid-cols-2 sm:grid-rows-1 sm:gap-5">
      {/* Image preview */}
      <div className="relative h-60 w-full overflow-hidden rounded-2xl lg:h-80">
        <span className="absolute top-0 left-0 rounded-br-2xl bg-rose-950/50 backdrop-blur-2xl">
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
          className="aspect-video h-60 w-full object-cover lg:h-80"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="text-3xl font-semibold">{name}</h1>
        <p className="mb-1">{description}</p>

        <p className="font-passion-one mb-2 flex gap-1 text-4xl text-rose-950">
          S/. {(price[priceIndex] / 100).toFixed(2)}
        </p>
        <h2 className="mb-1 text-xl">Disponibilidad:</h2>
        <ul className="mb-3 flex gap-2">
          {availability.map((label, key) => (
            <li
              key={key}
              className={`cursor-pointer rounded-3xl px-3 py-1 ${
                priceIndex === key ? "bg-rose-950" : "bg-rose-800"
              } text-rose-50 transition-colors duration-300 hover:bg-rose-900`}
              onClick={() => setPriceIndex(key)}
            >
              {label}
            </li>
          ))}
        </ul>

        {/* alert */}
        <div className="mb-3 grid grid-cols-[auto_1fr] items-center gap-2 rounded-2xl bg-rose-800 px-3 py-2 text-rose-50">
          <FiAlertCircle /> Los pedidos deben realizarse con mínimo 1 día de
          anticipación.
        </div>

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
