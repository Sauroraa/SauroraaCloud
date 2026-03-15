import { SignalBadge } from "./SignalBadge";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <section className="aurora-surface mt-6 rounded-[34px] p-7 sm:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <SignalBadge label="Signal Active" />
        <p className="text-xs uppercase tracking-[0.28em] text-lunar/40">
          {eyebrow}
        </p>
      </div>
      <h3 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-lunar sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-lunar/66 sm:text-base">
        {description}
      </p>
    </section>
  );
}
