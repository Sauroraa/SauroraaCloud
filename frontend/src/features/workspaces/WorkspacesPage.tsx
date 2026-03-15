import { PageIntro } from "../../shared/ui/PageIntro";

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
          <article
            key={space.name}
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-halo"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
              {space.scope}
            </p>
            <h4 className="mt-3 text-xl font-semibold text-ink">{space.name}</h4>
            <p className="mt-4 text-sm text-slate-500">
              {space.members} members with role-aware access.
            </p>
          </article>
        ))}
      </section>
    </>
  );
}

