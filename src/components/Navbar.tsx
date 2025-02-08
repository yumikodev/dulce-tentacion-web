"use client";

import Image from "next/image";
import Link from "next/link";
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
      url: "/",
    },
    {
      label: "Postres",
      url: "/postres",
    },
  ];

  const handleClick = () => setActive(!active);

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full flex-wrap items-center justify-between bg-rose-500 p-4 transition-colors duration-300">
      {/* Brand */}
      <div className="flex items-center gap-3">
        <Image
          src="/imgs/logo.png"
          alt="Dulce Tentación"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h5 className="font-dynapuff content-center text-xl text-rose-50 uppercase">
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
        className="flex h-0 max-h-fit w-full flex-col gap-4 overflow-hidden transition-all duration-300 data-[show]:h-dvh data-[show]:pt-4 sm:!h-auto sm:w-fit sm:flex-row sm:gap-0 sm:!p-0"
        {...(active && { "data-show": "on" })}
      >
        {items.map(({ label, url }, key) => (
          <li key={key}>
            <Link
              href={url}
              className="block px-3 py-2 text-center font-semibold text-rose-50 transition-all duration-300 hover:underline hover:underline-offset-4"
              onClick={() => setActive(false)}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
