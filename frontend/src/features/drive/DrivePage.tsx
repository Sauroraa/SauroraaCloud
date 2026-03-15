import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";
import { SignalBadge } from "../../shared/ui/SignalBadge";

export function DrivePage() {
  return (
    <>
      <PageIntro
        eyebrow="Company drive"
        title="Files, previews, versions, and secure external shares."
        description="The drive module is designed to feel premium and controlled, with room for version history, secure delivery links, and audit-aware storage policies."
      />
      <AuroraSurface className="mt-6 rounded-[32px] border border-dashed border-white/12 p-10 text-center">
        <SignalBadge label="Transfer Layer" />
        <p className="mt-4 text-lg font-medium text-lunar">Drop zone placeholder</p>
        <p className="mt-3 text-sm text-lunar/54">
          Uploads, folders, previews, and share workflows will live here.
        </p>
      </AuroraSurface>
    </>
  );
}
