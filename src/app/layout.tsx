import type { Metadata } from "next";
import { Passion_One, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const passionOne = Passion_One({
  variable: "--font-passion-one",
  weight: "400",
});

const montserrat = Montserrat({
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
        className={`${passionOne.variable} ${montserrat.className} bg-rose-100`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
