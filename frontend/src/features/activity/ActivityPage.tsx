import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";

export function ActivityPage() {
  return (
    <>
      <PageIntro
        eyebrow="Activity"
        title="A clean decision and collaboration timeline."
        description="Activity will unify mentions, document events, approvals, and share actions into a single stream that is easy to filter and easy to trust."
      />
      <AuroraSurface className="mt-6 rounded-[32px] p-8">
        <p className="text-sm leading-7 text-lunar/62">
          Activity is treated as a live signal stream, not a dense log table.
          The visual rhythm should make approvals, mentions, and access traces
          immediately scannable.
        </p>
      </AuroraSurface>
    </>
  );
}
