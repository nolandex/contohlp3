// 1. Impor config dari data.js
import { config } from "@/config/data";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

export const NavMenu = (props: NavigationMenuProps) => {
  // 2. Ambil data navLinks dari config
  const navLinks = config.navLinks;

  return (
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
        
        {/* 3. Gunakan .map() untuk membuat menu dari data config */}
        {/* Kode lama yang ditulis manual satu per satu sudah dihapus */}
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.href}>
            <NavigationMenuLink asChild>
              <Link href={link.href}>{link.title}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}

      </NavigationMenuList>
    </NavigationMenu>
  );
};
