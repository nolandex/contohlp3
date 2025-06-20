"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { config } from "@/config/data";

const iconMap = {
  ArrowUpRight: ArrowUpRight,
  CirclePlay: CirclePlay,
};

const Hero = () => {
  const { hero } = config;

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <div className="max-w-screen-xl w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-xl">
          <Badge className="rounded-full py-1 border-none">{hero.badge}</Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl xs:text-4xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-[60ch] xs:text-lg">{hero.description}</p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            {hero.buttons.map((button, index) => {
              const Icon = iconMap[button.icon];
              return (
                <Button
                  key={index}
                  size="lg"
                  variant={button.variant || "default"}
                  className="w-full sm:w-auto rounded-full text-base"
                  asChild
                >
                  <a href={button.link}>
                    {button.text} <Icon className="!h-5 !w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
        <div className="relative lg:max-w-lg xl:max-w-xl w-full bg-accent rounded-xl aspect-square">
          <Image
            src={hero.image}
            fill
            alt=""
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
