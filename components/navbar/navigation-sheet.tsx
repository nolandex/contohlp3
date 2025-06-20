import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import { NavMenu } from "./nav-menu";

// --- Perubahan Dimulai di Sini ---

// 1. Tambahkan import Link dan config
import Link from "next/link";
import { config } from "@/config/data";

// Hapus baris "import { Logo } from "./logo";" karena sudah tidak digunakan lagi.

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>Navigation Drawer</SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* 2. Ganti <Logo /> dengan nama brand menggunakan <Link> */}
        <Link href="/" className="font-bold text-lg">
          {config.brandName}
        </Link>
        
        <NavMenu orientation="vertical" className="mt-12" />

        {/* 3. Hapus seluruh div yang berisi tombol Sign In & Get Started */}
        {/* <div className="mt-8 space-y-4"> ... </div> */}

      </SheetContent>
    </Sheet>
  );
};
