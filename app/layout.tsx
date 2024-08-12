import type { Metadata } from "next";
import "./globals.css";
import { Albert_Sans } from "next/font/google";
import PrelineScript from "@/components/preline/Preline";
import Footer from "@/components/footer/Footer";



const sans = Albert_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Arc Synergy",
  description: "Energy Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        {children}
        <Footer/>
      </body>
      <PrelineScript />
    </html>
  );
}
