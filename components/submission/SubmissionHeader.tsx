
import { CalendarDays, MapPin, Sparkles } from "lucide-react";
import type { SubmissionConfig } from "@/features/submission/submission.types";

export default function SubmissionHeader({
  config,
}: {
  config: SubmissionConfig;
}) {
  return (
    <header
  className="relative isolate flex min-h-[250px] w-full items-center overflow-hidden rounded-2xl text-white shadow-[0_24px_70px_-35px_rgba(15,45,75,0.65)]"
  style={{
    background: "linear-gradient(90deg, #A03792 0%, #6F509D 50%, #0D6FAA 100%)",
  }}
>
      <div className="eposter-header-orb eposter-header-orb-one" />
      <div className="eposter-header-orb eposter-header-orb-two" />
      <div className="eposter-header-grid" />

      <div className="relative z-10 w-full px-4 py-6 text-center sm:px-6 sm:py-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-100 backdrop-blur sm:text-[10px]">
          <Sparkles className="size-3" />
          46th Annual Conference
        </div>

        <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-100/90 sm:text-xs">
          Welcome to the scientific showcase
        </p>

        <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl lg:text-5xl">
          {config.conference.name}
        </h1>

        <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-blue-50/90 sm:text-sm">
          {config.title} Submission Portal
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
          <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs backdrop-blur sm:w-auto sm:text-sm">
            <CalendarDays className="size-3.5 shrink-0 text-cyan-200" />
            <span>{config.conference.dateRange}</span>
          </div>

          <div className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs backdrop-blur sm:w-auto sm:text-sm">
            <MapPin className="size-3.5 shrink-0 text-cyan-200" />
            <span>{config.conference.venue}</span>
          </div>
        </div>

        <p className="mt-2 text-[10px] font-medium tracking-wide text-blue-100/80 sm:text-xs">
          {config.conference.city}
        </p>
      </div>
    </header>
  );
}
