import type { Metadata } from "next";
import { DynaPuff, Montserrat, Passion_One } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dynapuff = DynaPuff({
  variable: "--font-dynapuff",
  subsets: ["latin"],
});

const passionOne = Passion_One({
  variable: "--font-passion-one",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const title = "Dulce Tentación",
  description =
    "Azúcar tradicional o Stevia, disfruta de nuestros riquísimos postres en sus diferentes presentaciones sin impedimentos.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Dulces",
    "Postres",
    "Tentación",
    "Stevia",
    "Saludable",
    "Azúcar",
    "Riquísimos",
    "Perú",
    "Talara",
    "Diabéticos",
    "Alternativa",
  ],
  openGraph: {
    type: "website",
    title,
    description,
    locale: "es",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${dynapuff.variable} ${passionOne.variable} ${montserrat.className} ${montserrat.variable} bg-rose-100 min-h-dvh`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
