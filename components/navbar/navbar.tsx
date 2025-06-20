// Impor yang dibutuhkan
import { config } from "@/config/data"; // Pastikan path ini benar ke file data.js Anda
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="h-16 bg-background border-b border-accent">
      <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Menampilkan Nama Brand dari data.js, tanpa logo */}
        <a href="/" className="font-bold text-lg">
          {config.brandName}
        </a>

        {/* Menu Desktop (jika ada, biarkan saja) */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          {/* Tombol Ganti Tema (Moon Icon) */}
          <ThemeToggle />
          
          {/* Tombol Menu Mobile (Hamburger Icon) */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

