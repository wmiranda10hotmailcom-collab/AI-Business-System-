import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "danger" | "subtle";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50 cursor-pointer active:scale-[0.98]",
          {
            "bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm font-semibold": variant === "default",
            "bg-zinc-800 text-zinc-100 hover:bg-zinc-700/80 border border-zinc-700/50": variant === "secondary",
            "border border-zinc-800 bg-transparent hover:bg-zinc-800/60 text-zinc-200 hover:text-white": variant === "outline",
            "hover:bg-zinc-800/60 text-zinc-300 hover:text-white": variant === "ghost",
            "bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25": variant === "danger",
            "bg-zinc-900/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/80 border border-zinc-800/80": variant === "subtle",
          },
          {
            "h-10 px-4 py-2": size === "default",
            "h-8 rounded-lg px-3 text-xs": size === "sm",
            "h-12 rounded-xl px-6 text-base font-semibold": size === "lg",
            "h-9 w-9 p-0": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
