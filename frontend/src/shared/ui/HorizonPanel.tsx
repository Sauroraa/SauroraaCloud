import type { ReactNode } from "react";

type HorizonPanelProps = {
  title: string;
  eyebrow: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function HorizonPanel({
  title,
  eyebrow,
  description,
  children,
  className = ""
}: HorizonPanelProps) {
  return (
    <div
      className={`signal-grid relative rounded-[28px] border border-white/10 bg-white/[0.03] p-5 ${className}`.trim()}
    >
      <p className="text-[11px] uppercase tracking-[0.28em] text-lunar/44">
        {eyebrow}
      </p>
      <h4 className="mt-3 text-xl font-semibold text-lunar">{title}</h4>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-lunar/66">
          {description}
        </p>
      ) : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

