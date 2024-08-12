import type { Metadata } from "next";
import "./globals.css";
import { Albert_Sans } from "next/font/google";
import PrelineScript from "@/components/preline/Preline";
import Footer from "@/components/footer/Footer";



const sans = Albert_Sans({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Arc Synergy",
  description: "Energy Company",
  openGraph: {
    title: "Arc Synergy",
    description:
      "Arc Synergy Limited is an indigenous energy services company delivering excellent procurement and technical support services to the energy industry in Africa",
    url: "https://arc-synergy.vercel.app/",
    images: [
      {
        url: "https://arc-synergy.vercel.app/assets/arc-synergy.png",
        width: 800,
        height: 600,
        alt: "Arc Synergy Logo",
      },
    ],
    siteName: "Arc Synergy",
  },
  twitter: {
    card: "summary_large_image",
    site: "@MijanRichard",
    title: "Arc Synergy",
    description:
      "Arc Synergy Limited is an indigenous energy services company delivering excellent procurement and technical support services to the energy industry in Africa",
    images: ["https://arc-synergy.vercel.app/assets/arc-synergy.png"],
  },
  alternates: {
    canonical: "https://arc-synergy.vercel.app/",
  },
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
