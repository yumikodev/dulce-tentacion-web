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
    <footer id="footer" className="relative mt-10 overflow-hidden bg-rose-900">
      <div className="absolute -top-5 left-0 h-10 w-full rounded-[100%] bg-rose-100"></div>

      <div className="container mx-auto flex max-w-screen-lg flex-col gap-6 px-4 py-10 sm:flex-row sm:justify-between">
        <div className="w-full">
          <div className="mb-1 flex items-center gap-2">
            <Image
              src="/imgs/logo.png"
              alt="Dulce Bienestar"
              width={50}
              height={50}
              className="rounded-full"
            />
            <h5 className="font-dynapuff text-2xl text-rose-50 uppercase">
              Dulce Tentación ™
            </h5>
          </div>
          <p className="max-w-md text-rose-200">
            Azúcar tradicional o Stevia, disfruta de nuestros riquísimos postres
            en sus diferentes presentaciones sin impedimentos.
          </p>
        </div>
        <div className="flex w-full justify-between sm:max-w-sm">
          <ul className="flex flex-col gap-2">
            <h5 className="text-rose text-lg font-semibold text-rose-50">
              Secciones
            </h5>

            {sections.map((s, key) =>
              s.children ? (
                <li key={key}>
                  <Link
                    href={s.url}
                    className="flex items-center gap-2 text-rose-100 hover:underline"
                  >
                    <FaAsterisk className="text-rose-300" />
                    {s.label}
                  </Link>
                  <ul className="mt-1 ml-6 flex flex-col gap-2">
                    {s.children.map(({ label, url }, key) => (
                      <li key={key}>
                        <Link
                          href={url}
                          className="flex items-center gap-2 text-rose-100 hover:underline"
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
                  className="flex items-center gap-2 text-rose-100 hover:underline"
                >
                  <FaAsterisk className="text-rose-300" />
                  <Link href={s.url}>{s.label}</Link>
                </li>
              ),
            )}
          </ul>
          <ul className="flex flex-col items-start gap-1">
            {socials.map(({ link, type }, key) => (
              <li key={key}>
                <a
                  href={link}
                  target="_blank"
                  className="flex items-center gap-2 rounded-3xl bg-rose-500 px-3 py-2 text-rose-50 transition-colors duration-300 hover:bg-rose-600"
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

      <p className="mb-6 text-center text-rose-50/70">
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
