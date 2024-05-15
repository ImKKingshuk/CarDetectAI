import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";
import Navbar from "@/Components/DefaultUI/Navbar";
import Footer from "@/Components/DefaultUI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HyperDetectAI",
  description:
    "Experience next-generation road safety with HyperDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with HyperDetectAI.",
  metadataBase: new URL("https://hyperdetectai.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      hi: "/hi",
      bn: "/bn",
    },
  },

  applicationName: "HyperDetectAI",
  referrer: "origin-when-cross-origin",
  keywords: ["HyperDetectAI", "HyperDetect"],
  authors: [{ name: "@ImKKingshuk", url: "https://github.com/ImKKingshuk" }],

  openGraph: {
    title: "HyperDetectAI",
    description:
      "Experience next-generation road safety with HyperDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with HyperDetectAI.",
    url: "https://hyperdetectai.vercel.app",
    siteName: "HyperDetectAI",
    images: [
      {
        url: "https://hyperdetectai.vercel.app/HyperDetectAI.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://hyperdetectai.vercel.app/HyperDetectAI.png",
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
    title: "HyperDetectAI",
    description:
      "Experience next-generation road safety with HyperDetectAI. Our Object Detection system, powered by AI, detects cars, people, and objects in real-time, providing alerts for speeding, collision risks, and potential accidents. Stay informed and secure on the road with HyperDetectAI.",
    images: ["https://hyperdetectai.vercel.app/HyperDetectAI.png"],
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
