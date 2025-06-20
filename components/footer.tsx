"use client";

import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Music, // Digunakan untuk TikTok
  Facebook,
  MessageCircle, // Digunakan untuk WhatsApp
  Mail,
} from "lucide-react";
import Link from "next/link";
import { config } from "@/config/data";

const iconMap = {
  InstagramIcon: Instagram,
  TiktokIcon: Music,
  FacebookIcon: Facebook,
  WhatsappIcon: MessageCircle,
  MailIcon: Mail,
};

type IconKey = keyof typeof iconMap;

const Footer = () => {
  const { footer } = config;
  const currentYear = new Date().getFullYear();

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
              {links &&
                Array.isArray(links) &&
                links.map(({ title, href }) => (
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
          {footer.copyright.text.replace("{YEAR}", currentYear.toString())}
        </span>

        <div className="flex items-center gap-5 text-muted-foreground">
          {footer.socialLinks.map(({ icon, href }) => {
            const IconComponent = iconMap[icon as IconKey];
            if (!IconComponent) return null;

            return (
              <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                <IconComponent className="h-5 w-5 transition-colors hover:text-foreground" />
                <span className="sr-only">{icon.replace("Icon", "")}</span>
              </Link> 
              // ^-- KESALAHANNYA DI SINI, SEKARANG SUDAH BENAR MENJADI </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

