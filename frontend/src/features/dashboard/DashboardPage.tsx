import { PageIntro } from "../../shared/ui/PageIntro";

const metrics = [
  { label: "Active members", value: "142", detail: "+12 this month" },
  { label: "Protected files", value: "18.4k", detail: "96% classified" },
  { label: "Live workspaces", value: "27", detail: "8 executive spaces" },
  { label: "Pending invites", value: "09", detail: "3 require approval" }
];

const highlights = [
  "Board Room vault updated with the March governance pack.",
  "Finance workspace reached 82% of its protected storage quota.",
  "Three client spaces are waiting for legal share approval."
];

export function DashboardPage() {
  return (
    <>
      <PageIntro
        eyebrow="Enterprise dashboard"
        title="An elegant cockpit for the whole company."
        description="The dashboard brings together access health, priority workspaces, and critical documents in one controlled surface built for operators, managers, and executives."
      />

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-halo"
          >
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-4 text-4xl font-semibold text-ink">
              {metric.value}
            </p>
            <p className="mt-2 text-sm text-slate-500">{metric.detail}</p>
          </article>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-halo">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Priority workspaces
              </p>
              <h4 className="mt-3 text-xl font-semibold text-ink">
                Teams, projects, and client rooms
              </h4>
            </div>
            <button className="rounded-2xl border border-slate-200 px-4 py-2 text-sm text-slate-600">
              New workspace
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["Executive", "Finance", "Client Vault"].map((space) => (
              <div
                key={space}
                className="rounded-[28px] bg-slate-950 p-5 text-white"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-white/50">
                  Secure space
                </p>
                <h5 className="mt-4 text-xl font-medium">{space}</h5>
                <p className="mt-4 text-sm leading-6 text-white/70">
                  Documents, activity, and permissions aligned around a single
                  operational scope.
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[32px] border border-slate-200/80 bg-white p-6 shadow-halo">
          <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
            Executive feed
          </p>
          <h4 className="mt-3 text-xl font-semibold text-ink">
            Decisions and alerts
          </h4>
          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm leading-6 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}

