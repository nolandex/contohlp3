"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { config } from "@/config/data";

const iconMap = {
  Goal: Goal,
  BookCheck: BookCheck,
  ChartPie: ChartPie,
  Users: Users,
  FolderSync: FolderSync,
  Zap: Zap,
};

const Features = () => {
  const { features } = config;

  return (
    <div
      id="features"
      className="max-w-screen-xl mx-auto w-full py-12 xs:py-20 px-6"
    >
      <h2 className="text-3xl xs:text-4xl md:text-5xl md:leading-[3.5rem] font-bold tracking-tight sm:max-w-xl sm:text-center sm:mx-auto">
        {features.title}
      </h2>
      <div className="mt-8 xs:mt-14 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {features.items.map((feature) => {
          const Icon = iconMap[feature.icon];
          return (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                <Icon />
                <h4 className="!mt-3 text-xl font-bold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-sm xs:text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={208}
                  className="h-52 ml-6 rounded-tl-xl object-cover"
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
