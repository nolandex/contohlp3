"use client";

import { CircleCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { config } from "@/config/data";
import Link from "next/link";

interface PlanFeature {
  text: string;
  included: boolean;
}

const Pricing = () => {
  const { pricing } = config;

  return (
    <section>
      <div className="container space-y-8 py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            {pricing.title}
          </h2>
          <p className="max-w-md text-balance leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {pricing.description || "Choose the plan that’s right for you and start building."}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:mx-auto lg:max-w-4xl">
          {pricing.items.map((plan) => (
            <Card
              key={plan.name}
              className={cn(
                "relative flex flex-col transition duration-200 ease-in-out",
                {
                  "border-2 border-primary shadow-lg": plan.isPopular,
                  border: !plan.isPopular,
                }
              )}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                {plan.isPopular && (
                  <Badge variant="outline" className="absolute right-4 top-4">
                    Most Popular
                  </Badge>
                )}
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="mb-6 mt-2 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-primary">
                    ${plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-muted-foreground">
                    /month
                  </span>
                </p>
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CircleCheck
                        className={cn(
                          "h-5 w-5",
                          typeof feature === "string" ? "text-primary" : feature.included ? "text-primary" : "text-muted-foreground"
                        )}
                      />
                      <span
                        className={cn({
                          "text-muted-foreground line-through": typeof feature !== "string" && !feature.included,
                        })}
                      >
                        {typeof feature === "string" ? feature : feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center pt-6">
                <Button
                  asChild
                  variant={plan.isPopular ? "default" : "outline"}
                  size="lg"
                  className={cn(buttonVariants({ size: "lg" }), "w-full")}
                >
                  <Link href={plan.buttonLink} target="_blank" rel="noopener noreferrer">
                    {plan.buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
