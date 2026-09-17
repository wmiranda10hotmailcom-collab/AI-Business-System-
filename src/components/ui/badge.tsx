import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "bonus" | "success";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors",
        {
          "bg-white text-zinc-950 shadow-sm": variant === "default",
          "bg-zinc-800 text-zinc-300 border border-zinc-700/60": variant === "secondary",
          "border border-zinc-700 text-zinc-300": variant === "outline",
          "bg-amber-500/15 text-amber-300 border border-amber-500/30": variant === "bonus",
          "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30": variant === "success",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
