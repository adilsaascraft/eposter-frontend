
import {
  Download,
  FileText,
  Presentation,
  ExternalLink,
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
      title: "Download E-Poster Template",
      description: "Download the official PowerPoint template.",
      href: templateUrl,
      icon: Download,
      download: true,
    },
    {
      title: "Presentation Schedule",
      description: "View the E-Poster presentation schedule.",
      href: scheduleUrl,
      icon: Presentation,
      download: false,
    },
    {
      title: "E-Poster Guidelines",
      description: "Read the E-Poster submission specifications.",
      href: guidelinesUrl,
      icon: FileText,
      download: false,
    },
  ];

  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-foreground">
          Important Resources
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Please review the resources before submitting your E-Poster.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {resources.map((resource) => {
          const Icon = resource.icon;

          return (
            <div
              key={resource.title}
              className="flex flex-col rounded-xl border bg-card p-4 transition-colors hover:border-primary/40"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" />
              </div>

              <h3 className="mt-3 text-sm font-semibold">
                {resource.title}
              </h3>

              <p className="mt-1 flex-1 text-xs leading-5 text-muted-foreground">
                {resource.description}
              </p>

              {resource.download ? (
                <a
                  href={resource.href}
                  download
                  className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-accent"
                >
                  <Download className="mr-2 size-4" />
                  Download
                </a>
              ) : (
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border text-sm font-medium transition-colors hover:bg-accent"
                >
                  <ExternalLink className="mr-2 size-4" />
                  Open document
                </a>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
