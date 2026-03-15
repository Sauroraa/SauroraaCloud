type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="mt-6 rounded-[32px] border border-white/60 bg-white/78 p-6 shadow-halo backdrop-blur">
      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
        {description}
      </p>
    </section>
  );
}

