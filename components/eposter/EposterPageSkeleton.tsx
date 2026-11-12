export default function EposterPageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl animate-pulse space-y-7">
      <div className="h-64 rounded-[2rem] bg-slate-200 sm:h-72" />
      <div className="space-y-4">
        <div className="h-7 w-56 rounded-lg bg-slate-200" />
        <div className="grid gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-52 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="size-12 rounded-2xl bg-slate-200" />
              <div className="mt-5 h-4 w-3/4 rounded bg-slate-200" />
              <div className="mt-3 h-3 w-full rounded bg-slate-100" />
              <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
              <div className="mt-5 h-10 rounded-xl bg-slate-100" />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-7 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-9">
        <div className="h-8 w-64 rounded bg-slate-200" />
        <div className="grid gap-6 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="space-y-2">
              <div className="h-3 w-28 rounded bg-slate-200" />
              <div className="h-12 rounded-xl bg-slate-100" />
            </div>
          ))}
        </div>
        <div className="h-36 rounded-2xl bg-slate-100" />
      </div>
    </div>
  );
}
