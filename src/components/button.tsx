"use client";

import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  className,
  asChild,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200";

  const variants = {
    primary:
      "bg-[var(--accent)] text-black hover:brightness-110 active:scale-[0.98]",
    secondary:
      "border border-[var(--border)] text-white hover:bg-[var(--muted)] active:scale-[0.98]",
  };

  const Comp: any = asChild ? "span" : "button";

  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}