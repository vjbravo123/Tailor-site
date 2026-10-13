import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        whatsapp: "bg-whatsapp text-white hover:brightness-95 shadow-lg shadow-whatsapp/25",
        outline: "border border-primary/30 text-primary hover:bg-primary/5",
        ghost: "text-foreground hover:bg-foreground/5",
      },
      size: { sm: "h-9 px-4 text-sm", default: "h-12 px-6 text-[15px]", lg: "h-14 px-8 text-base" },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

type Props = React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>;
export function ButtonLink({ className, variant, size, ...p }: Props) {
  return <a className={cn(buttonVariants({ variant, size }), className)} {...p} />;
}
