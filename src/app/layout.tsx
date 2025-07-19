import type { Metadata } from "next";
import { Inter, Montserrat, Abhaya_Libre } from "next/font/google";
import WrapperLayout from "@/components/layouts/wrapper-layout";
import Navbar from "@/ui/menu/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const abhaya = Abhaya_Libre({
  subsets: ["latin"],
  variable: "--font-abhaya",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Fantasy Football",
  description:
    "FutbolXpert is your guide to the world of fantasy football! Build your own team of real football players, follow their performances and earn points. Your strategy determines your success!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${abhaya.variable}`}>
      <body>
        <Navbar></Navbar>
        <WrapperLayout>{children}</WrapperLayout>
      </body>
    </html>
  );
}
