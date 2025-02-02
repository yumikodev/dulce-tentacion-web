"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface Item {
  label: string;
  url: string;
}

function Navbar() {
  const [active, setActive] = useState(false);

  const items: Item[] = [
    {
      label: "Inicio",
      url: "#",
    },
    {
      label: "Postres",
      url: "#postres",
    },
    {
      label: "Sobre nosotros",
      url: "/nosotros",
    },
  ];

  const handleClick = () => setActive(!active);

  return (
    <nav className="bg-rose-500 p-4 flex flex-wrap justify-between items-center fixed w-full z-50 transition-colors duration-300">
      {/* Brand */}
      <div className="flex gap-3 items-center">
        <Image
          src="/imgs/logo.jpg"
          alt="Dulce Tentación"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h5 className="font-passion-one text-3xl content-center text-rose-50 uppercase">
          Dulce Tentación
        </h5>
      </div>

      {/* Button */}
      <button
        id="toggle-menu"
        type="button"
        className="text-3xl text-rose-50 outline-none sm:hidden"
        onClick={handleClick}
      >
        {active ? (
          <FiX className="animate-bounceIn" />
        ) : (
          <FiMenu className="animate-bounceIn" />
        )}
      </button>

      {/* Collapse */}
      <ul
        id="collapse"
        className="w-full flex flex-col gap-4 overflow-hidden h-0 max-h-fit data-[show]:pt-4 data-[show]:h-dvh transition-all duration-300 sm:flex-row sm:!p-0 sm:w-fit sm:!h-auto sm:gap-0"
        {...(active && { "data-show": "on" })}
      >
        {items.map(({ label, url }, key) => (
          <li key={key}>
            <a
              href={url}
              className="px-3 py-2 block font-semibold text-rose-50 text-center hover:underline hover:underline-offset-4 transition-all duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
