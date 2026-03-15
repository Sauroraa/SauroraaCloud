import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";
import { SignalBadge } from "../../shared/ui/SignalBadge";

const spaces = [
  { name: "Strategy Office", scope: "Executive", members: 6 },
  { name: "Operations Core", scope: "Department", members: 21 },
  { name: "Aster Client Vault", scope: "Client", members: 9 }
];

export function WorkspacesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Workspaces"
        title="Spaces structured by team, project, and decision flow."
        description="Each workspace centralizes files, notes, members, and recent activity so company context stays contained and easy to govern."
      />

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        {spaces.map((space) => (
          <AuroraSurface
            key={space.name}
            className="rounded-[28px] p-6"
          >
            <SignalBadge label={space.scope} />
            <h4 className="mt-4 text-xl font-semibold text-lunar">{space.name}</h4>
            <p className="mt-4 text-sm text-lunar/56">
              {space.members} members with role-aware access.
            </p>
          </AuroraSurface>
        ))}
      </section>
    </>
  );
}
