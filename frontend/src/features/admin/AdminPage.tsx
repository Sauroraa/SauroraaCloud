import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";

export function AdminPage() {
  return (
    <>
      <PageIntro
        eyebrow="Admin console"
        title="Members, invitations, quotas, roles, and security controls."
        description="The admin layer is where operators govern the platform: invitation rules, device visibility, quotas, audit trails, and eventually SSO and access policies."
      />
      <AuroraSurface className="mt-6 rounded-[32px] p-8">
        <p className="text-sm leading-7 text-lunar/62">
          The admin console should feel like a control chamber: fewer visible
          actions, stronger state signaling, and no template-like enterprise chrome.
        </p>
      </AuroraSurface>
    </>
  );
}
