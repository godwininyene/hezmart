import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hezmart Vendor Register",
  description: "Register on Hezmart",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Hezmart register",
    "online shopping",
    "shopping app",
    "ecommerce",
    "buy online",
    "fashion",
    "electronics",
    "deals",
    "smart shopping",
  ],
  authors: [{ name: "HezMart" }],
  creator: "HezMart",
  themeColor: "#0E1421",
  openGraph: {
    title: "Hezmart Register",
    description: "Register on Hezmart",
    url: "https://hezmart.vercel.app",
    siteName: "Hezmart",
    images: [
      {
        url: "/hezmart-preview.png",
        width: 1200,
        height: 630,
        alt: "Hezmart ecommerce website preview image",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hezmart - Your Smart Shopping Destination",
    description:
      "Shop smarter with Hezmart – your go-to destination for quality products, unbeatable deals, and a seamless online shopping experience.",
  },
};

export default function RegisterLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
