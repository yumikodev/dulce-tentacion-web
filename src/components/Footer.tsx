import socials from "@/data/socials.json";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaAsterisk,
} from "react-icons/fa6";

function Footer() {
  const sections = [
    {
      label: "Sobre nosotros",
      url: "#",
    },
    {
      label: "Postres",
      url: "/postres",
      children: [
        {
          label: "Con Azúcar",
          url: "/postres?category=general",
        },
        {
          label: "Con Stevia",
          url: "/postres?category=stevia",
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-rose-900 overflow-hidden mt-10">
      <div className="absolute left-0 -top-5 w-full h-10 rounded-[100%] bg-rose-100"></div>

      <div className="container px-4 py-10 max-w-screen-lg mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <div className="flex items-center gap-2 mb-1">
            <Image
              src="/imgs/logo.jpg"
              alt="Dulce Bienestar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h5 className="font-passion-one uppercase text-3xl text-rose-50">
              Dulce Tentación ™
            </h5>
          </div>
          <p className="text-rose-200 max-w-md">
            Azúcar tradicional o Stevia, disfruta de nuestros riquísimos postres
            en sus diferentes presentaciones sin impedimentos.
          </p>
        </div>
        <div className="flex justify-between w-full sm:max-w-sm">
          <ul className="flex flex-col gap-2">
            <h5 className="text-lg text-rose font-semibold text-rose-50">
              Secciones
            </h5>

            {sections.map((s, key) =>
              s.children ? (
                <li key={key}>
                  <Link
                    href={s.url}
                    className="flex gap-2 text-rose-100 items-center hover:underline"
                  >
                    <FaAsterisk className="text-rose-300" />
                    {s.label}
                  </Link>
                  <ul className="flex flex-col gap-2 mt-1 ml-6">
                    {s.children.map(({ label, url }, key) => (
                      <li key={key}>
                        <Link
                          href={url}
                          className="flex gap-2 text-rose-100 items-center hover:underline"
                        >
                          <FaAsterisk className="text-rose-400" />
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li
                  key={key}
                  className="flex gap-2 text-rose-100 items-center hover:underline"
                >
                  <FaAsterisk className="text-rose-300" />
                  <Link href={s.url}>{s.label}</Link>
                </li>
              )
            )}
          </ul>
          <ul className="flex flex-col gap-1 items-start">
            {socials.map(({ link, type }, key) => (
              <li key={key}>
                <a
                  href={link}
                  target="_blank"
                  className="text-rose-50 flex gap-2 items-center px-3 py-2 bg-rose-500 hover:bg-rose-600 rounded-3xl transition-colors duration-300"
                >
                  {type === "WhatsApp" ? (
                    <FaWhatsapp />
                  ) : type === "Instagram" ? (
                    <FaInstagram />
                  ) : type === "Facebook" ? (
                    <FaFacebook />
                  ) : (
                    <FaTiktok />
                  )}{" "}
                  {type}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-center text-rose-50/70 mb-6">
        Desarrollado por{" "}
        <a
          href="https://yumikodev.vercel.app"
          className="text-rose-300 underline underline-offset-2"
        >
          Edwin J.
        </a>
      </p>
    </footer>
  );
}

export default Footer;
