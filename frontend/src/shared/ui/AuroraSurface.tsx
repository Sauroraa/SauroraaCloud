import type { ReactNode } from "react";

type AuroraSurfaceProps = {
  children: ReactNode;
  className?: string;
  tone?: "default" | "dense" | "vault";
};

const tones = {
  default: "bg-[linear-gradient(180deg,rgba(18,28,48,0.82)_0%,rgba(7,12,23,0.92)_100%)]",
  dense: "bg-[linear-gradient(180deg,rgba(15,22,38,0.92)_0%,rgba(5,10,20,0.98)_100%)]",
  vault: "bg-[linear-gradient(180deg,rgba(10,14,22,0.96)_0%,rgba(3,6,12,1)_100%)]"
};

export function AuroraSurface({
  children,
  className = "",
  tone = "default"
}: AuroraSurfaceProps) {
  return (
    <section
      className={`aurora-surface rounded-[30px] ${tones[tone]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

