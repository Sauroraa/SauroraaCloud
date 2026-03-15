import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";

export function VaultPage() {
  return (
    <>
      <PageIntro
        eyebrow="Company vault"
        title="Restricted access for legal, HR, finance, and board documents."
        description="The vault is the controlled layer for sensitive company records, designed for fewer people, stricter policy, and higher audit visibility."
      />
      <AuroraSurface className="mt-6 rounded-[32px] p-8" tone="vault">
        <p className="max-w-2xl text-sm leading-7 text-lunar/62">
          Vault mode intentionally reduces ambient movement and raises contrast
          so confidential work feels denser, quieter, and more deliberate.
        </p>
      </AuroraSurface>
    </>
  );
}
