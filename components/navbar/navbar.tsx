// Impor yang dibutuhkan
import { config } from "@/config/data"; // 1. Impor konfigurasi dari file Anda
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Nama Website dari File Konfigurasi */}
        <a href="/" className="font-bold text-lg">
          {config.brandName} {/* 2. Gunakan nama brand dari file config */}
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <NavMenu />
        </div>

        <div className="flex items-center gap-3">
          {/* Tombol Ganti Tema */}
          <ThemeToggle />
          
          {/* Menu Mobile */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
