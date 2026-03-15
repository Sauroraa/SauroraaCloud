import { PageIntro } from "../../shared/ui/PageIntro";

export function AdminPage() {
  return (
    <>
      <PageIntro
        eyebrow="Admin console"
        title="Members, invitations, quotas, roles, and security controls."
        description="The admin layer is where operators govern the platform: invitation rules, device visibility, quotas, audit trails, and eventually SSO and access policies."
      />
    </>
  );
}

