import { PageIntro } from "../../shared/ui/PageIntro";

export function DrivePage() {
  return (
    <>
      <PageIntro
        eyebrow="Company drive"
        title="Files, previews, versions, and secure external shares."
        description="The drive module is designed to feel premium and controlled, with room for version history, secure delivery links, and audit-aware storage policies."
      />
      <section className="mt-6 rounded-[32px] border border-dashed border-slate-300 bg-white/80 p-10 text-center shadow-halo">
        <p className="text-lg font-medium text-ink">Drop zone placeholder</p>
        <p className="mt-3 text-sm text-slate-500">
          Uploads, folders, previews, and share workflows will live here.
        </p>
      </section>
    </>
  );
}

