"use client";

import { Separator } from "@/components/ui/separator";
// 1. Impor ikon yang hanya ada di data.js
import { DribbbleIcon, GithubIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { config } from "@/config/data";

// 2. Peta ikon disesuaikan dengan data.js
const iconMap = {
  TwitterIcon: TwitterIcon,
  DribbbleIcon: DribbbleIcon,
  GithubIcon: GithubIcon,
};

type IconKey = keyof typeof iconMap;

const Footer = () => {
  const { footer } = config;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      {/* Bagian Atas Footer (Logo dan Link Section) */}
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        {/* Logo dan Deskripsi */}
        <div className="col-span-full xl:col-span-2">
          <div dangerouslySetInnerHTML={{ __html: footer.logo.svg }} />
          <p className="mt-4 text-muted-foreground">{footer.logo.description}</p>
        </div>

        {/* Link Section Dinamis */}
        {footer.sections.map(({ title, links }) => (
          <div key={title} className="xl:justify-self-end">
            <h6 className="font-semibold text-foreground">{title}</h6>
            <ul className="mt-6 space-y-4">
              {links.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Separator />

      {/* Bagian Bawah Footer (Copyright dan Social Media) */}
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        {/* 3. Copyright disederhanakan dan sepenuhnya dari data.js */}
        <span className="text-muted-foreground text-center xs:text-start">
          {footer.copyright.text.replace("{YEAR}", currentYear.toString())}
        </span>

        {/* Ikon Social Media Dinamis */}
        <div className="flex items-center gap-5 text-muted-foreground">
          {footer.socialLinks.map(({ icon, href }) => {
            const IconComponent = iconMap[icon as IconKey];
            if (!IconComponent) return null;

            return (
              <Link
                key={href} // Lebih baik menggunakan href sebagai key jika unik
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="h-5 w-5 transition-colors hover:text-foreground" />
                <span className="sr-only">{icon.replace("Icon", "")}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

