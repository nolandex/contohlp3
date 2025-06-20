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

// Peta ikon tetap sama
const iconMap = {
  Goal: Goal,
  BookCheck: BookCheck,
  ChartPie: ChartPie,
  Users: Users,
  FolderSync: FolderSync,
  Zap: Zap,
};

// --- REVISI 1: Buat sebuah tipe (type) untuk kunci ikon ---
// Ini secara otomatis membuat tipe yang isinya adalah "Goal" | "BookCheck" | "ChartPie" | dst.
type IconKey = keyof typeof iconMap;

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
          // --- REVISI 2: Beri tahu TypeScript bahwa feature.icon adalah kunci yang valid ---
          // Kita gunakan "as IconKey" untuk meyakinkan TypeScript.
          const Icon = iconMap[feature.icon as IconKey];

          // --- REVISI 3 (Praktik Terbaik): Tambahkan fallback ---
          // Jika karena suatu alasan nama ikon salah/tidak ada, komponen ini tidak akan error.
          if (!Icon) {
            return null;
          }

          return (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none"
            >
              <CardHeader>
                {/* --- REVISI 4 (Peningkatan): Beri ukuran pada ikon --- */}
                <Icon className="w-8 h-8 text-primary" />
                <h4 className="!mt-4 text-xl font-bold tracking-tight">
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
