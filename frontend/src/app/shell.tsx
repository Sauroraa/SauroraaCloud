import { NavLink, Outlet } from "react-router-dom";

import { AuroraSurface } from "../shared/ui/AuroraSurface";
import { PulseButton } from "../shared/ui/PulseButton";
import { SignalBadge } from "../shared/ui/SignalBadge";

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
    <div className="min-h-screen bg-aurora-mesh text-lunar">
      <div className="mx-auto flex min-h-screen max-w-[1600px] gap-4 px-3 py-3 sm:px-5 lg:px-6">
        <aside className="sticky top-3 hidden h-[calc(100vh-1.5rem)] w-[92px] shrink-0 rounded-[32px] border border-white/8 bg-panel p-4 shadow-halo backdrop-blur xl:flex xl:flex-col">
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[20px] border border-white/12 bg-white/6 text-lg font-semibold text-lunar">
              S
            </div>
            <div className="mt-5 space-y-1 text-center">
              <p className="text-[10px] uppercase tracking-[0.34em] text-lunar/34">
                Core
              </p>
              <div className="mx-auto h-8 w-[2px] rounded-full bg-gradient-to-b from-polar/70 via-boreal/80 to-transparent" />
            </div>
          </div>

          <nav className="mt-8 space-y-3">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `group relative flex min-h-[62px] items-center justify-center rounded-[22px] px-3 py-3 text-center text-[11px] uppercase tracking-[0.24em] transition ${
                    isActive
                      ? "bg-white/10 text-lunar shadow-vein"
                      : "text-lunar/42 hover:bg-white/6 hover:text-lunar"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`absolute inset-y-3 left-0 w-[2px] rounded-full bg-gradient-to-b from-polar to-boreal transition ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span className="max-w-[58px] leading-4">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto rounded-[24px] border border-white/8 bg-white/[0.04] px-3 py-4 text-center">
            <p className="text-[10px] uppercase tracking-[0.28em] text-lunar/36">
              Secure
            </p>
            <p className="mt-2 text-lg font-semibold text-polar">99.98%</p>
          </div>
        </aside>

        <main className="flex-1 py-1">
          <AuroraSurface className="rounded-[34px] px-5 py-5 sm:px-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                <SignalBadge label="Private Company OS" tone="secure" />
                <SignalBadge label="Atmosphere Stable" />
                <SignalBadge label="Vault Trace On" tone="warning" />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <label className="flex min-w-[280px] items-center gap-3 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-lunar/54">
                  <span className="text-lunar/40">Lumen search</span>
                  <input
                    className="w-full bg-transparent text-lunar outline-none placeholder:text-lunar/24"
                    placeholder="Projects, files, people, decisions"
                  />
                </label>
                <PulseButton>Open Horizon</PulseButton>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-lunar/34">
                  Aurora Infrastructure
                </p>
                <h1 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.04em] text-lunar sm:text-5xl">
                  A private operating surface shaped by silence, signal, and control.
                </h1>
              </div>
              <p className="max-w-xl text-sm leading-7 text-lunar/60">
                SauroraaCloud is not arranged as a dashboard. It behaves like a controlled climate:
                fewer visible actions, stronger atmospheric structure, and calm system depth.
              </p>
            </div>
          </AuroraSurface>

          <Outlet />
        </main>
      </div>
    </div>
  );
}
