import {
  ArrowDownToLine,
  ArrowUpRight,
  BookOpenCheck,
  FileText,
  Presentation,
  Sparkles,
} from "lucide-react";

interface EposterGuidelinesProps {
  templateUrl?: string;
  scheduleUrl?: string;
  guidelinesUrl?: string;
}

export default function EposterGuidelines({
  templateUrl = "/eposter-template.pptx",
  scheduleUrl = "/presentation-schedule.pdf",
  guidelinesUrl = "/eposter-guidelines.pdf",
}: EposterGuidelinesProps) {
  const resources = [
    {
      title: "Official E-Poster Template",
      description: "Prepare your presentation using the approved PowerPoint template.",
      href: templateUrl,
      icon: ArrowDownToLine,
      action: "Download template",
      download: true,
    },
    {
      title: "Presentation Schedule",
      description: "Check the schedule and plan your presentation accordingly.",
      href: scheduleUrl,
      icon: Presentation,
      action: "View schedule",
      download: false,
    },
    {
      title: "E-Poster Guidelines",
      description: "Review the display, slide, design and colour specifications.",
      href: guidelinesUrl,
      icon: FileText,
      action: "Read guidelines",
      download: false,
    },
  ];

  return (
    <section className="space-y-4" aria-labelledby="eposter-resources-title">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <BookOpenCheck className="size-4" />
            Before you submit
          </div>
          <h2 id="eposter-resources-title" className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
            Important Resources
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            Please review the template and submission guidelines before uploading your poster.
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-[11px] font-bold text-amber-800">
          <Sparkles className="size-3.5" />
          Important for all presenters
        </span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          const highlighted = index === 0;
          return (
            <article
              key={resource.title}
              className={`eposter-resource-card group relative flex min-h-52 flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
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
              <div className={`flex size-12 items-center justify-center rounded-2xl ${
                highlighted ? "bg-teal-700 text-white shadow-lg shadow-teal-700/20" : "bg-slate-100 text-slate-700"
              }`}>
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 pr-10 text-sm font-bold text-slate-900">{resource.title}</h3>
              <p className="mt-2 flex-1 text-xs leading-6 text-slate-600">{resource.description}</p>
              <a
                href={resource.href}
                {...(resource.download
                  ? { download: true }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className={`mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-xl px-3 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 ${
                  highlighted
                    ? "bg-teal-700 text-white hover:bg-teal-800"
                    : "border border-slate-200 bg-white text-slate-700 hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                }`}
              >
                {resource.action}
                {resource.download ? <ArrowDownToLine className="size-4" /> : <ArrowUpRight className="size-4" />}
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
