function LoaderSkeleton() {
  return (
    <div
      className="fixed inset-0 z-50 flex min-h-screen flex-col overflow-hidden bg-[#08030f]"
      role="status"
      aria-label="Cargando experiencia BTS"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(111,45,168,.25),transparent_38%)]" />
      <div className="relative mx-auto flex h-full w-full max-w-[1500px] flex-1 flex-col px-6 py-8 md:px-12">
        <div className="mx-auto mt-8 h-36 w-64 animate-pulse rounded-2xl bg-white/[.07] md:h-48 md:w-[420px]" />
        <div className="absolute right-6 top-7 flex flex-col items-center gap-3 md:right-12">
          <div className="h-16 w-16 animate-pulse rounded-2xl bg-white/[.09] md:h-24 md:w-24" />
          <div className="h-3 w-16 animate-pulse rounded-full bg-white/[.07]" />
        </div>
        <div className="mt-auto mb-8 space-y-3">
          <div className="h-4 w-[74%] max-w-md animate-pulse rounded-full bg-white/[.08]" />
          <div className="h-4 w-[62%] max-w-sm animate-pulse rounded-full bg-white/[.08]" />
          <div className="h-4 w-[54%] max-w-xs animate-pulse rounded-full bg-white/[.08]" />
        </div>
        <div className="absolute bottom-8 left-1/2 h-16 w-32 -translate-x-1/2 animate-pulse rounded-xl bg-white/[.07] md:h-20 md:w-44" />
      </div>
      <span className="sr-only">Cargando...</span>
    </div>
  )
}

export default LoaderSkeleton
