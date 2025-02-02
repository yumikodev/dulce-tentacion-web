import socials from "@/data/socials.json";
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
      label: "Contactanos",
      url: "#",
    },
    {
      label: "Postres",
      children: [
        {
          label: "Con Azúcar",
          url: "#",
        },
        {
          label: "Con Stevia",
          url: "#",
        },
      ],
    },
  ];

  return (
    <footer className="relative bg-rose-900 overflow-hidden mt-10">
      <div className="absolute left-0 -top-5 w-full h-10 rounded-[100%] bg-rose-100"></div>

      <div className="container px-4 py-10 max-w-screen-lg mx-auto flex flex-col gap-6 sm:flex-row sm:justify-between">
        <div className="w-full">
          <h4 className="font-passion-one uppercase text-3xl text-rose-50">
            Dulce Tentación ™
          </h4>
          <p className="text-rose-200 max-w-md">
            Azúcar tradicional o Stevia, disfruta de nuestros riquísimos postres
            en sus diferentes presentaciones sin impedimentos.
          </p>
        </div>
        <div className="flex justify-between w-full sm:max-w-sm">
          <ul className="flex flex-col gap-1">
            <h5 className="text-lg text-rose font-semibold text-rose-50">
              Secciones
            </h5>

            {sections.map((s, key) =>
              s.children ? (
                <li key={key}>
                  <span className="flex gap-2 text-rose-100 items-center">
                    <FaAsterisk className="text-rose-300" />
                    {s.label}
                  </span>
                  <ul className="flex flex-col gap-1 mt-1 ml-6">
                    {s.children.map(({ label, url }, key) => (
                      <li key={key}>
                        <Link href={url} className="text-rose-100">
                          <span className="flex gap-2 text-rose-100 items-center">
                            <FaAsterisk className="text-rose-400" />
                            {label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={key} className="flex gap-2 text-rose-100 items-center">
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
                  className="text-rose-50 flex gap-2 items-center px-3 py-2 bg-rose-500 rounded-3xl"
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
    </footer>
  );
}

export default Footer;
