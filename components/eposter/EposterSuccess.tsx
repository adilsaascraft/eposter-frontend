
"use client";

import {
  CheckCircle2,
  Mail,
  MessageCircle,
  PartyPopper,
  Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface EposterSuccessProps {
  presenterName: string;
  onSubmitNew: () => void;
}

export default function EposterSuccess({
  presenterName,
  onSubmitNew,
}: EposterSuccessProps) {
  return (
    <section
      role="status"
      aria-live="polite"
      className="overflow-hidden rounded-2xl border bg-card shadow-sm"
    >
      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 px-6 py-10 text-center text-white sm:px-10 sm:py-12">
        <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-white/15 ring-8 ring-white/10">
          <CheckCircle2 className="size-11" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          <PartyPopper className="size-5" />
          <p className="text-sm font-semibold uppercase tracking-wider">
            Submission Successful
          </p>
        </div>

        <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
          Thank You, {presenterName}!
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Your E-Poster has been submitted successfully for AROICON 2026.
          We appreciate your contribution to the scientific programme.
        </p>
      </div>

      <div className="space-y-5 p-6 sm:p-8">
        <div className="text-center">
          <h3 className="font-semibold text-foreground">
            What's next?
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Your submission has been received. Please check your
            registered contact details for the confirmation messages.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-xl border bg-muted/20 p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
              <Mail className="size-5" />
            </div>

            <div>
              <p className="text-sm font-semibold">Email Confirmation</p>
              <p className="text-xs text-muted-foreground">
                Check your registered email.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border bg-muted/20 p-4">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
              <MessageCircle className="size-5" />
            </div>

            <div>
              <p className="text-sm font-semibold">WhatsApp Confirmation</p>
              <p className="text-xs text-muted-foreground">
                Check your registered mobile.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-2">
          <Button onClick={onSubmitNew} className="w-full sm:w-auto">
            <Plus className="mr-2 size-4" />
            Submit a New E-Poster
          </Button>
        </div>
      </div>
    </section>
  );
}
