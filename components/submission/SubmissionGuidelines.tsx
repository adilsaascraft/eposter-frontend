
"use client";

import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpenCheck,
  FileText,
  Presentation,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import type { SubmissionConfig } from "@/features/submission/submission.types";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SubmissionGuidelines({
  config,
}: {
  config: SubmissionConfig;
}) {
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);

  const guidelines = config.resources.guidelines ?? [];
  const hasGuidelines = guidelines.length > 0;

  const presentationName = config.shortTitle;

  const guidelineTitle = `${presentationName} Guidelines`;
  const guidelineCount = guidelines.length;

  const resources = [
    {
      title: `Official ${presentationName} Template`,
      description: `Prepare your presentation using the approved ${presentationName} PowerPoint template.`,
      href: config.resources.templateUrl,
      icon: ArrowDownToLine,
      action: "Download template",
      download: true,
    },
    {
      title: "Presentation Schedule",
      description:
        "Check the schedule and plan your presentation accordingly.",
      href: config.resources.scheduleUrl,
      icon: Presentation,
      action: "View schedule",
      download: false,
    },
  ];

  return (
    <section
      className="space-y-4"
      aria-labelledby={`${config.kind}-resources-title`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <BookOpenCheck className="size-4" />
            Before you submit
          </div>

          <h2
            id={`${config.kind}-resources-title`}
            className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl"
          >
            Important Resources
          </h2>

          <p className="mt-1 text-sm text-slate-600">
            Please review the resources and submission guidelines before
            uploading your presentation.
          </p>
        </div>

        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-bold text-amber-800">
          <Sparkles className="size-3.5" />
          Important for all presenters
        </span>
      </div>

      <div
        className={`grid gap-4 ${
          hasGuidelines ? "md:grid-cols-3" : "md:grid-cols-2"
        }`}
      >
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          const highlighted = index === 0;
          const available = Boolean(resource.href);

          return (
            <article
              key={resource.title}
              className={`eposter-resource-card group relative flex min-h-52 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 ${
                highlighted
                  ? "eposter-guideline-highlight border-teal-300 bg-gradient-to-br from-white via-cyan-50 to-teal-50 shadow-lg shadow-teal-900/10"
                  : "border-slate-200 bg-white/90 shadow-sm hover:border-teal-200"
              }`}
            >
              {highlighted && (
                <span className="absolute right-4 top-4 rounded-full bg-teal-700 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-white">
                  Start here
                </span>
              )}

              <div
                className={`flex size-12 items-center justify-center rounded-2xl ${
                  highlighted
                    ? "bg-teal-700 text-white shadow-lg shadow-teal-700/20"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                <Icon className="size-5" />
              </div>

              <h3 className="mt-4 pr-10 text-sm font-bold text-slate-900">
                {resource.title}
              </h3>

              <p className="mt-2 flex-1 text-xs leading-6 text-slate-600">
                {resource.description}
              </p>

              {available ? (
                <a
                  href={resource.href}
                  {...(resource.download
                    ? { download: true }
                    : {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                  className={`mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                    highlighted
                      ? "bg-teal-700 text-white hover:bg-teal-800"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                  }`}
                >
                  {resource.action}
                  {resource.download ? (
                    <ArrowDownToLine className="size-4" />
                  ) : (
                    <ArrowUpRight className="size-4" />
                  )}
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 px-3 text-xs font-semibold text-slate-400"
                >
                  Currently the resource is not available.
                </span>
              )}
            </article>
          );
        })}

        {hasGuidelines && (
          <article className="eposter-resource-card relative flex min-h-52 flex-col overflow-hidden rounded-2xl border border-teal-200 bg-gradient-to-br from-white via-cyan-50/70 to-teal-50/80 p-5 shadow-sm transition-all duration-300 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-900/10">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-teal-700 text-white shadow-lg shadow-teal-700/20">
              <FileText className="size-5" />
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-900">
              {guidelineTitle}
            </h3>

            <p className="mt-2 flex-1 text-xs leading-6 text-slate-600">
              Access all {guidelineCount} official PDF{" "}
              {guidelineCount === 1 ? "guideline" : "guidelines"} for{" "}
              {presentationName}. Please review these documents before
              preparing your presentation.
            </p>

            <button
              type="button"
              onClick={() => setGuidelinesOpen(true)}
              className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-teal-700 px-3 text-xs font-bold text-white transition-colors hover:bg-teal-800"
            >
              Read Guidelines
              <ArrowUpRight className="size-4" />
            </button>
          </article>
        )}
      </div>

      {hasGuidelines && (
        <Dialog open={guidelinesOpen} onOpenChange={setGuidelinesOpen}>
          <DialogContent className="max-h-[85vh] overflow-y-auto rounded-2xl sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-lg font-extrabold text-slate-900">
                <BookOpenCheck className="size-5 text-teal-700" />
                {guidelineTitle}
              </DialogTitle>

              <DialogDescription className="text-sm leading-6">
                Please review all {guidelineCount} official{" "}
                {guidelineCount === 1 ? "document" : "documents"} before
                submitting your {presentationName}.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-3 pt-2">
              {guidelines.map((guideline, index) => (
                <a
                  key={guideline.url}
                  href={guideline.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-teal-300 hover:bg-teal-50/60"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 transition-colors group-hover:bg-red-100">
                    <FileText className="size-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-teal-800">
                      {guideline.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      PDF Document {index + 1}
                    </p>
                  </div>

                  <ExternalLink className="size-4 shrink-0 text-slate-400 transition-colors group-hover:text-teal-700" />
                </a>
              ))}
            </div>

            <p className="rounded-lg bg-amber-50 px-3 py-2.5 text-xs leading-5 text-amber-800">
              Important: All applicable guidelines should be reviewed before
              uploading your final presentation.
            </p>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
