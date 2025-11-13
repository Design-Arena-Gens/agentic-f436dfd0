export function Hero() {
  return (
    <section className="container pt-20 pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
        Live mock demo
      </div>
      <h1 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight">
        Bring ideas to life with
        <span className="bg-gradient-to-r from-brand-400 to-blue-300 bg-clip-text text-transparent"> Sora AI</span>
      </h1>
      <p className="mt-4 max-w-2xl text-white/70">
        Type a prompt. Get a video. This demo simulates generation so you can explore the flow and UI.
      </p>
    </section>
  )
}
