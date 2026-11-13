
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  FileDown,
  File,
  Monitor,
  Presentation,
  Timer,
} from "lucide-react";

const submissionOptions = [
  {
    title: "E-Poster Submission",
    subtitle: "Scientific Poster Submission",
    description:
      "Submit your scientific work as an E-Poster presentation for AROICON 2026.",
    instructions: [
      "Upload your poster in PPT or PPTX format.",
      "Maximum file size: 10 MB.",
      "Please use the prescribed E-Poster template.",
    ],
    href: "/e-poster-submission-form",
    icon: Monitor,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    cardBg: "bg-blue-50",
    borderColor: "border-blue-200",
    buttonBg: "bg-blue-700 hover:bg-blue-800",
    label: "E-Poster Submission",
  },
  {
    title: "Oral Poster Submission",
    subtitle: "Shortlisted Applicant Submission",
    description:
      "Prepare and submit your Oral Presentation for the AROICON 2026 scientific programme.",
    instructions: [
      "Presentation duration: 4 minutes.",
      "Question & Answer session: 2 minutes.",
      "6–8 slides are recommended.",
      "Negative marking applies for exceeding the presentation time.",
    ],
    href: "/oral-poster-submission-form",
    icon: Presentation,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700",
    cardBg: "bg-teal-50",
    borderColor: "border-teal-200",
    buttonBg: "bg-teal-700 hover:bg-teal-800",
    label: "Oral Presentation Submission",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-teal-800">
            <span className="size-2 rounded-full bg-teal-600" />
            AROICON 2026
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Presentation Submission Portal
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Welcome to the AROICON 2026 presentation portal. Please select
            your presentation category below to proceed with your submission.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            <span className="inline-flex items-center gap-2">
              <Clock3 className="size-4 text-teal-700" />
              03 – 06 December 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Monitor className="size-4 text-teal-700" />
              HICC, Hyderabad
            </span>
          </div>
        </div>

        {/* Submission Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {submissionOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className={`group flex flex-col overflow-hidden rounded-2xl border ${option.borderColor} ${option.cardBg} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  {/* Icon and Category */}
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex size-14 items-center justify-center rounded-2xl ${option.iconBg}`}
                    >
                      <Icon className={`size-7 ${option.iconColor}`} />
                    </div>

                    <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-600">
                      {option.label}
                    </span>
                  </div>

                  {/* Heading */}
                  <div className="mt-7">
                    <p
                      className={`text-xs font-bold uppercase tracking-[0.15em] ${option.iconColor}`}
                    >
                      {option.subtitle}
                    </p>

                    <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {option.title}
                    </h2>

                    <p className="mt-3 min-h-[52px] text-sm leading-7 text-slate-600">
                      {option.description}
                    </p>
                  </div>

                  {/* Instructions */}
                  <div className="mt-7 rounded-xl border border-white/80 bg-white/75 p-5">
                    <h3 className="mb-4 text-sm font-bold text-slate-800">
                      Important Instructions
                    </h3>

                    <ul className="space-y-3">
                      {option.instructions.map((instruction) => (
                        <li
                          key={instruction}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span
                            className={`mt-2 size-1.5 shrink-0 rounded-full ${option.iconColor.replace("text-", "bg-")}`}
                          />
                          {instruction}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action */}
                  <div className="mt-auto pt-7">
                    <Link
                      href={option.href}
                      className={`flex w-full items-center justify-center gap-3 rounded-xl px-5 py-4 text-sm font-bold text-white shadow-sm transition-all duration-200 ${option.buttonBg}`}
                    >
                      Proceed to Submission
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Information */}
        <div className="mt-10 rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm sm:px-8">
          <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-slate-100">
            <File className="size-5 text-slate-700" />
          </div>

          <h3 className="mt-3 text-base font-bold text-slate-900">
            Before You Begin
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Please review the respective presentation guidelines and keep
            your presentation file ready before starting the submission
            process.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="grid grid-cols-1 items-center gap-3 text-center sm:grid-cols-3">
            <p className="text-center text-[11px] text-slate-500 sm:text-left">
              © 2026 AROICON. All rights reserved.
            </p>

            <p className="text-xs font-bold text-slate-600">
              ePoster.in by SaaScraft Studio (India) Pvt. Ltd.
            </p>

            <p className="inline-flex items-center justify-center gap-1.5 text-[11px] text-slate-500 sm:justify-end">
              <FileDown className="size-3.5" />
              Presentation Submission Portal
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
