"use client";
import { usePathname } from "next/navigation";
import LandingNavbar from "./LandingNavbar";
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const showNavbar = pathname === "/";
  const showFooter = pathname === "/";
  return (
    <>
      {showNavbar && <LandingNavbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
}
