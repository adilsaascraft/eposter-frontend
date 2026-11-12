import { CalendarDays, MapPin, Sparkles } from "lucide-react";

import { EPOSTER_CONFERENCE } from "@/features/eposter/eposter.constants";

export default function EposterHeader() {
  return (
    <header className="eposter-header relative isolate overflow-hidden rounded-[2rem] text-white shadow-[0_24px_70px_-35px_rgba(15,45,75,0.65)]">
      <div className="eposter-header-orb eposter-header-orb-one" />
      <div className="eposter-header-orb eposter-header-orb-two" />
      <div className="eposter-header-grid" />

      <div className="relative mx-auto max-w-5xl px-5 py-10 text-center sm:px-10 sm:py-14 lg:py-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-cyan-100 backdrop-blur sm:text-xs">
          <Sparkles className="size-3.5" />
          46th Annual Conference
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.38em] text-cyan-100/90">
          Welcome to the scientific showcase
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
          {EPOSTER_CONFERENCE.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-50/90 sm:text-lg">
          E-Poster Submission Portal
        </p>

        <div className="mx-auto mt-8 flex max-w-3xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur sm:w-auto">
            <CalendarDays className="size-4 shrink-0 text-cyan-200" />
            <span>{EPOSTER_CONFERENCE.dateRange}</span>
          </div>
          <div className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm backdrop-blur sm:w-auto">
            <MapPin className="size-4 shrink-0 text-cyan-200" />
            <span>{EPOSTER_CONFERENCE.venue}</span>
          </div>
        </div>
        <p className="mt-4 text-xs font-medium tracking-wide text-blue-100/80">
          {EPOSTER_CONFERENCE.city}
        </p>
      </div>
    </header>
  );
}
