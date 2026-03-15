type SignalBadgeProps = {
  label: string;
  tone?: "active" | "secure" | "warning";
};

const tones = {
  active: "bg-polar/14 text-polar border-polar/22",
  secure: "bg-ion/14 text-ion border-ion/22",
  warning: "bg-ember/14 text-ember border-ember/22"
};

export function SignalBadge({
  label,
  tone = "active"
}: SignalBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.24em] ${tones[tone]}`}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-80" />
      {label}
    </span>
  );
}

