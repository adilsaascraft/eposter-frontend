
"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";

import EposterHeader from "@/components/eposter/EposterHeader";
import EposterSubmissionForm from "@/components/eposter/EposterSubmissionForm";
import EposterGuidelines from "@/components/eposter/EposterGuidelines";
import EposterSuccess from "@/components/eposter/EposterSuccess";

import { submitEposter } from "@/features/eposter/eposter.service";

import type { EposterFormValues } from "@/features/eposter/eposter.types";

const SUCCESS_DISPLAY_DURATION = 10_000;

export default function EposterPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successPresenterName, setSuccessPresenterName] = useState<
    string | null
  >(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Automatically return to the submission form after 10 seconds.
  useEffect(() => {
    if (!successPresenterName) return;

    const timer = window.setTimeout(() => {
      setSuccessPresenterName(null);
    }, SUCCESS_DISPLAY_DURATION);

    return () => window.clearTimeout(timer);
  }, [successPresenterName]);

  // Submit E-Poster
  const handleSubmit = async (values: EposterFormValues) => {
    try {
      setIsSubmitting(true);
      setErrorMessage(null);

      const response = await submitEposter(values);

      if (response.success) {
        setSuccessPresenterName(response.data.presenterName);
      }
    } catch (error) {
      console.error("EPoster submission error:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Start a new submission immediately.
  const handleSubmitNew = () => {
    setErrorMessage(null);
    setSuccessPresenterName(null);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-3 py-5 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Conference Header */}
        <EposterHeader />

        {/* Submission Success or Submission Form */}
        {successPresenterName ? (
          <EposterSuccess
            presenterName={successPresenterName}
            onSubmitNew={handleSubmitNew}
          />
        ) : (
          <>
            {/* Important Resources */}
            <EposterGuidelines />

            {/* API Error */}
            {errorMessage && (
              <div
                role="alert"
                className="flex items-start gap-3 rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-destructive"
              >
                <AlertCircle className="mt-0.5 size-5 shrink-0" />

                <div>
                  <p className="text-sm font-semibold">
                    Submission Failed
                  </p>

                  <p className="mt-1 text-sm">
                    {errorMessage}
                  </p>
                </div>
              </div>
            )}

            {/* Submission Form */}
            <EposterSubmissionForm
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </>
        )}

        {/* Footer */}
        <footer className="pb-4 pt-2 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 AROICON. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            AROICON 2026 · 03–06 December · HICC, Hyderabad
          </p>
        </footer>
      </div>
    </main>
  );
}
