import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hezmart Password Reset",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function CustomerRegisterLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased h-screen w-screen flex items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
