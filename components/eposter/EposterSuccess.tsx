"use client";

import {
  ArrowRight,
  Check,
  CheckCircle2,
  Mail,
  MessageCircle,
  PartyPopper,
  Plus,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface EposterSuccessProps {
  presenterName: string;
  emailStatus?: "PENDING" | "SENT" | "FAILED";
  whatsappStatus?: "PENDING" | "SENT" | "FAILED";
  onSubmitNew: () => void;
}

export default function EposterSuccess({
  presenterName,
  emailStatus = "PENDING",
  whatsappStatus = "PENDING",
  onSubmitNew,
}: EposterSuccessProps) {
  return (
    <section
      role="status"
      aria-live="polite"
      className="eposter-success-card relative isolate overflow-hidden rounded-[2rem] border border-emerald-100 bg-white shadow-[0_25px_80px_-40px_rgba(5,150,105,0.35)]"
    >
      <div className="eposter-success-glow" />
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0f766e] via-[#0d817e] to-[#155e75] px-6 py-12 text-center text-white sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-24 size-64 rounded-full border-[30px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-36 -left-20 size-80 rounded-full border-[40px] border-white/10" />
        <div className="eposter-success-icon relative mx-auto flex size-24 items-center justify-center rounded-full border border-white/30 bg-white/15 shadow-2xl shadow-teal-950/20 backdrop-blur">
          <CheckCircle2 className="size-12" />
          <span className="absolute -right-2 -top-1 flex size-8 items-center justify-center rounded-full bg-amber-300 text-amber-950 shadow-lg">
            <Sparkles className="size-4" />
          </span>
        </div>
        <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-teal-50">
          <PartyPopper className="size-4" />
          Submission received
        </div>
        <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl">
          Thank You, {presenterName}!
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-teal-50/95 sm:text-base">
          Your E-Poster has been successfully submitted for AROICON 2026. We appreciate your contribution to the scientific programme.
        </p>
      </div>

      <div className="relative space-y-7 px-5 py-8 sm:px-10 sm:py-10">
        <div className="text-center">
          <h3 className="text-lg font-extrabold text-slate-900">What happens next?</h3>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
            Your submission has been recorded. Please refer to your registered contact details for confirmation messages.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
              <Mail className="size-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">Email confirmation</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {emailStatus === "SENT" ? "Confirmation request sent." : emailStatus === "FAILED" ? "Confirmation could not be sent." : "Confirmation status is pending."}
              </p>
            </div>
            {emailStatus === "SENT" && <Check className="ml-auto size-4 text-emerald-600" />}
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
              <MessageCircle className="size-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">WhatsApp updates</p>
              <p className="mt-0.5 text-xs text-slate-500">
                {whatsappStatus === "SENT" ? "Confirmation request sent." : whatsappStatus === "FAILED" ? "Confirmation could not be sent." : "Confirmation status is pending."}
              </p>
            </div>
            {whatsappStatus === "SENT" && <Check className="ml-auto size-4 text-emerald-600" />}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 border-t border-dashed border-slate-200 pt-6">
          <Button onClick={onSubmitNew} className="h-12 w-full rounded-xl bg-teal-700 px-7 font-bold text-white shadow-lg shadow-teal-900/15 hover:bg-teal-800 sm:w-auto">
            <Plus className="mr-2 size-4" />
            Submit another E-Poster
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <p className="text-xs text-slate-400">You can start another submission at any time.</p>
        </div>
      </div>
    </section>
  );
}
