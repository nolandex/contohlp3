"use client";

import { Separator } from "@/components/ui/separator";
import {
  DribbbleIcon,
  GithubIcon,
  TwitchIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { config } from "@/config/data";

const iconMap = {
  TwitterIcon: TwitterIcon,
  DribbbleIcon: DribbbleIcon,
  TwitchIcon: TwitchIcon,
  GithubIcon: GithubIcon,
};

// --- REVISI 1: Buat tipe (type) untuk kunci ikon ---
// Ini akan membuat tipe data yang isinya adalah "TwitterIcon" | "DribbbleIcon" | "TwitchIcon" | "GithubIcon"
type IconKey = keyof typeof iconMap;

const Footer = () => {
  const { footer } = config;

  return (
    <footer className="mt-12 xs:mt-20 dark bg-background border-t">
      <div className="max-w-screen-xl mx-auto py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6">
        <div className="col-span-full xl:col-span-2">
          <div dangerouslySetInnerHTML={{ __html: footer.logo.svg }} />
          <p className="mt-4 text-muted-foreground">{footer.logo.description}</p>
        </div>
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
      <div className="max-w-screen-xl mx-auto py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6">
        <span className="text-muted-foreground text-center xs:text-start">
          <span
            dangerouslySetInnerHTML={{
              __html: footer.copyright.text.replace(
                "2025",
                new Date().getFullYear().toString()
              ),
            }}
          />{" "}
          <Link href={footer.copyright.link} target="_blank">
            Shadcn UI Blocks
          </Link>
        </span>
        <div className="flex items-center gap-5 text-muted-foreground">
          {footer.socialLinks.map(({ icon, href }, index) => {
            // --- REVISI 2: Yakinkan TypeScript bahwa 'icon' adalah kunci yang valid ---
            const Icon = iconMap[icon as IconKey];

            // (Praktik Terbaik) Tambahkan fallback untuk mencegah error jika nama ikon salah
            if (!Icon) return null;

            return (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer" // Tambahan untuk keamanan
              >
                <Icon className="h-5 w-5 transition-colors hover:text-foreground" />
                {/* Tambahan untuk aksesibilitas */}
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
