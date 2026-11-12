
import { CalendarDays, MapPin } from "lucide-react";

import { EPOSTER_CONFERENCE } from "@/features/eposter/eposter.constants";

export default function EposterHeader() {
  return (
    <header className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#102f50] via-[#164c70] to-[#087f83] px-5 py-10 text-white shadow-lg sm:px-8 sm:py-14">
      <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[35px] border-white/5" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-80 rounded-full border-[45px] border-white/5" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-200 sm:text-sm">
          46th Annual Conference
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
          {EPOSTER_CONFERENCE.name}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-50/90 sm:text-base">
          E-Poster Submission Portal
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm sm:flex-row sm:gap-8">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-4 text-teal-200" />
            <span>{EPOSTER_CONFERENCE.dateRange}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="size-4 shrink-0 text-teal-200" />
            <span>{EPOSTER_CONFERENCE.venue}, {EPOSTER_CONFERENCE.city}</span>
          </div>
        </div>

        <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-teal-300" />
      </div>
    </header>
  );
}
