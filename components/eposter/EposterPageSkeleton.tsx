
export default function EposterPageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-5xl animate-pulse space-y-6">
      {/* Header skeleton */}
      <div className="h-56 rounded-2xl bg-muted sm:h-64" />

      {/* Resources skeleton */}
      <div className="space-y-3">
        <div className="h-6 w-48 rounded bg-muted" />

        <div className="grid gap-3 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="h-32 rounded-xl border bg-muted/40"
            />
          ))}
        </div>
      </div>

      {/* Form skeleton */}
      <div className="space-y-6 rounded-2xl border bg-card p-5 sm:p-8">
        <div className="space-y-2">
          <div className="h-7 w-56 rounded bg-muted" />
          <div className="h-4 w-72 max-w-full rounded bg-muted" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-4 w-28 rounded bg-muted" />
              <div className="h-10 rounded-lg bg-muted" />
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="h-28 rounded-xl bg-muted" />
        </div>

        <div className="h-11 w-44 rounded-lg bg-muted" />
      </div>
    </div>
  );
}
