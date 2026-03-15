import type { ButtonHTMLAttributes, ReactNode } from "react";

type PulseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#85d6ff_0%,#827dff_55%,#5cc9c2_100%)] text-slate-950 shadow-vein",
  secondary:
    "border border-white/10 bg-white/6 text-lunar hover:bg-white/10",
  ghost: "text-lunar/80 hover:bg-white/6"
};

export function PulseButton({
  children,
  className = "",
  variant = "primary",
  ...props
}: PulseButtonProps) {
  return (
    <button
      className={`rounded-[18px] px-4 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

