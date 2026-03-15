import { NavLink, Outlet } from "react-router-dom";

const navigation = [
  { to: "/", label: "Dashboard", end: true },
  { to: "/workspaces", label: "Workspaces" },
  { to: "/drive", label: "Drive" },
  { to: "/vault", label: "Vault" },
  { to: "/activity", label: "Activity" },
  { to: "/admin", label: "Admin" }
];

export function AppShell() {
  return (
    <div className="min-h-screen bg-aurora-mesh text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="sticky top-4 hidden h-[calc(100vh-2rem)] w-72 shrink-0 rounded-[32px] border border-white/50 bg-panel p-6 text-white shadow-halo backdrop-blur xl:flex xl:flex-col">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Private Company OS
            </p>
            <h1 className="mt-3 text-2xl font-semibold">SauroraaCloud</h1>
            <p className="mt-3 max-w-xs text-sm leading-6 text-white/70">
              Invitation-only workspace for secure operations, shared context,
              and premium company control.
            </p>
          </div>

          <nav className="mt-10 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "flex rounded-2xl px-4 py-3 text-sm transition",
                    isActive
                      ? "bg-white text-ink shadow-lg"
                      : "text-white/72 hover:bg-white/10 hover:text-white"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto rounded-[28px] border border-white/10 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.24em] text-white/50">
              Security posture
            </p>
            <p className="mt-3 text-3xl font-semibold">99.98%</p>
            <p className="mt-2 text-sm text-white/70">
              Sessions protected, audit-ready, and isolated by role.
            </p>
          </div>
        </aside>

        <main className="flex-1 py-2">
          <header className="rounded-[32px] border border-slate-200/80 bg-white/80 px-6 py-5 shadow-halo backdrop-blur">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  Central command
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-ink">
                  Private operations, one interface.
                </h2>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex min-w-[260px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-500">
                  <span className="text-slate-400">Search</span>
                  <input
                    className="w-full bg-transparent text-slate-900 outline-none"
                    placeholder="Projects, files, people, clients"
                  />
                </label>
                <button className="rounded-2xl bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                  Invite member
                </button>
              </div>
            </div>
          </header>

          <Outlet />
        </main>
      </div>
    </div>
  );
}

