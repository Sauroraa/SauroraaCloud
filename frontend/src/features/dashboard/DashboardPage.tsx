import { PageIntro } from "../../shared/ui/PageIntro";
import { AuroraSurface } from "../../shared/ui/AuroraSurface";
import { HorizonPanel } from "../../shared/ui/HorizonPanel";
import { PulseButton } from "../../shared/ui/PulseButton";
import { SignalBadge } from "../../shared/ui/SignalBadge";

const metrics = [
  { label: "Active members", value: "142", detail: "signal +12 this month" },
  { label: "Protected files", value: "18.4k", detail: "96% classified" },
  { label: "Live workspaces", value: "27", detail: "8 executive layers" },
  { label: "Pending invites", value: "09", detail: "3 await clearance" }
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
        title="A company panorama that feels like entering a living system."
        description="The dashboard is not a widget wall. It is the atmospheric layer where active spaces, company rhythm, protected access, and decision signals stay legible at one glance."
      />

      <section className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <AuroraSurface
            key={metric.label}
            className="signal-grid rounded-[28px] p-5"
          >
            <p className="text-sm text-lunar/54">{metric.label}</p>
            <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-lunar">
              {metric.value}
            </p>
            <div className="vein-line mt-4 h-px w-full" />
            <p className="mt-3 text-sm text-lunar/50">{metric.detail}</p>
          </AuroraSurface>
        ))}
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[1.3fr_0.9fr]">
        <AuroraSurface className="rounded-[34px] p-6">
          <div className="flex items-center justify-between">
            <div>
              <SignalBadge label="Priority Workspaces" />
              <h4 className="mt-4 text-2xl font-semibold text-lunar">
                Teams, projects, and client rooms
              </h4>
            </div>
            <PulseButton variant="secondary">Enter layer</PulseButton>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              ["Executive", "violet horizon"],
              ["Finance", "cold silver"],
              ["Client Vault", "polar cyan"]
            ].map(([space, mood]) => (
              <HorizonPanel
                key={space}
                eyebrow="Secure space"
                title={space}
                description={`Documents, activity, and permissions aligned as one controlled operational layer in a ${mood} mood.`}
              />
            ))}
          </div>
        </AuroraSurface>

        <AuroraSurface className="rounded-[34px] p-6" tone="dense">
          <SignalBadge label="Decision Feed" tone="warning" />
          <h4 className="mt-4 text-2xl font-semibold text-lunar">
            Decisions and alerts
          </h4>
          <div className="mt-6 space-y-4">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/[0.035] px-4 py-4 text-sm leading-6 text-lunar/66"
              >
                {item}
              </div>
            ))}
          </div>
        </AuroraSurface>
      </section>

      <section className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <AuroraSurface className="rounded-[34px] p-6" tone="vault">
          <SignalBadge label="Vault Mode" tone="secure" />
          <h4 className="mt-4 text-2xl font-semibold text-lunar">
            Quiet zone for board and legal matter.
          </h4>
          <p className="mt-4 max-w-xl text-sm leading-7 text-lunar/62">
            Reduced motion, harder contrast, tighter permissions. The vault
            should feel like a protected chamber rather than a folder tree.
          </p>
        </AuroraSurface>

        <AuroraSurface className="rounded-[34px] p-6">
          <SignalBadge label="Fluid Grid" />
          <h4 className="mt-4 text-2xl font-semibold text-lunar">
            Interface climate adapts to activity and confidentiality.
          </h4>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {["RH cold", "Client cyan", "Board violet"].map((state) => (
              <div
                key={state}
                className="rounded-[24px] border border-white/8 bg-white/[0.03] px-4 py-5 text-sm text-lunar/60"
              >
                {state}
              </div>
            ))}
          </div>
        </AuroraSurface>
      </section>
    </>
  );
}
