import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/Components/DefaultUI/Navbar";
import Footer from "@/Components/DefaultUI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarDetectAI",
  description:
    "Experience next-generation road safety with CarDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with CarDetectAI.",
  metadataBase: new URL("https://CarDetectAI.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },

  applicationName: "CarDetectAI",
  referrer: "origin-when-cross-origin",
  keywords: ["CarDetectAI", "CarDetect"],
  authors: [{ name: "@ImKKingshuk", url: "https://github.com/ImKKingshuk" }],

  openGraph: {
    title: "CarDetectAI",
    description:
      "Experience next-generation road safety with CarDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with CarDetectAI.",
    url: "https://CarDetectAI.vercel.app",
    siteName: "CarDetectAI",
    images: [
      {
        url: "https://CarDetectAI.vercel.app/CarDetectAI.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://CarDetectAI.vercel.app/CarDetectAI.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CarDetectAI",
    description:
      "Experience next-generation road safety with CarDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with CarDetectAI.",
    images: ["https://CarDetectAI.vercel.app/CarDetectAI.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Providers>
          <Navbar />
          <div className="my-[8rem]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
