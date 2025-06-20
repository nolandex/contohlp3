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
            const Icon = iconMap[icon];
            return (
              <Link key={index} href={href} target="_blank">
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
