export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950">
      <div className="relative h-16 w-16 overflow-hidden rounded-md border border-brand-cyan/30 bg-white/5">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent animate-shimmer" />
        <div className="absolute inset-4 rounded-md border-2 border-brand-blue border-t-transparent animate-spin" />
      </div>
    </div>
  );
}
