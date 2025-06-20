// Lokasi file: /components/navbar/navbar.tsx (sesuai log error Anda)

import Link from "next/link"; // 1. Impor komponen Link dari Next.js
import { config } from "@/config/data";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* 2. Ganti tag <a> menjadi <Link> */}
        <Link href="/" className="font-bold text-lg">
          {config.brandName}
        </Link>

        {/* Menu Desktop */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Tombol Ganti Tema */}
          <ThemeToggle />
          
          {/* Tombol Menu Mobile */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
