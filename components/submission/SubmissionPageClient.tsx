"use client";

import { useEffect, useState } from "react";
import { AlertCircle, Mail, MapPin, ShieldCheck } from "lucide-react";
import SubmissionHeader from "@/components/submission/SubmissionHeader";
import SubmissionForm from "@/components/submission/SubmissionForm";
import SubmissionGuidelines from "@/components/submission/SubmissionGuidelines";
import SubmissionSuccess from "@/components/submission/SubmissionSuccess";
import { submitSubmission } from "@/features/submission/submission.service";
import type { SubmissionConfig, SubmissionFormValues } from "@/features/submission/submission.types";

const SUCCESS_DISPLAY_DURATION = 30_000;

export default function SubmissionPageClient({ config }: { config: SubmissionConfig }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{
    presenterName: string;
    emailStatus: "PENDING" | "SENT" | "FAILED";
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!successData) return;
    const timer = window.setTimeout(() => setSuccessData(null), SUCCESS_DISPLAY_DURATION);
    return () => window.clearTimeout(timer);
  }, [successData]);

  const handleSubmit = async (values: SubmissionFormValues) => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);
      const response = await submitSubmission(values, config);
      if (response.success) {
        setSuccessData({
          presenterName: response.data.presenterName,
          emailStatus: response.data.emailNotification?.status ?? "PENDING",
        });
      }
    } catch (error) {
      console.error(`${config.shortTitle} submission error:`, error);
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmitNew = () => {
    setErrorMessage(null);
    setSuccessData(null);
  };

  return (
    <main className="eposter-page min-h-screen px-3 py-4 sm:px-6 sm:py-8">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="eposter-page-blob eposter-page-blob-one" />
        <div className="eposter-page-blob eposter-page-blob-two" />
      </div>
      <div className="mx-auto max-w-6xl space-y-7 sm:space-y-9">
        <SubmissionHeader config={config} />
        {successData ? (
          <SubmissionSuccess config={config} presenterName={successData.presenterName} emailStatus={successData.emailStatus} onSubmitNew={handleSubmitNew} />
        ) : (
          <>
            <SubmissionGuidelines config={config} />
            {errorMessage && (
              <div role="alert" className="flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-rose-800 shadow-sm">
                <AlertCircle className="mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Submission could not be completed</p>
                  <p className="mt-1 text-sm leading-6">{errorMessage}</p>
                </div>
              </div>
            )}
            <SubmissionForm config={config} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </>
        )}
        <footer className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-6 bg-gradient-to-r from-[#102f50] via-[#164c70] to-[#0f766e] px-6 py-7 text-white sm:grid-cols-3 sm:px-8">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-200">Conference</p>
              <p className="mt-2 text-lg font-black">{config.conference.name}</p>
              <p className="mt-1 text-xs text-blue-100">46th Annual Conference</p>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-cyan-200" />
              <div>
                <p className="text-sm font-bold">Venue</p>
                <p className="mt-1 text-xs leading-5 text-blue-100">{config.conference.venue}</p>
                <p className="text-xs text-blue-100">{config.conference.city}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 size-4 shrink-0 text-cyan-200" />
              <div>
                <p className="text-sm font-bold">Submission support</p>
                <p className="mt-1 text-xs leading-5 text-blue-100">{config.formText.supportText}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-2 px-6 py-4 text-center text-[11px] text-slate-500 sm:grid-cols-3 sm:px-8">
            <p className="text-center sm:text-left">© 2026 AROICON. All rights reserved.</p>
            <p className="text-xs font-bold text-slate-600">ePoster.in by SaaScraft Studio (India) Pvt. Ltd.</p>
            <p className="inline-flex items-center justify-center gap-1.5 sm:justify-end"><Mail className="size-3.5" /> {config.title} Submission Portal</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
