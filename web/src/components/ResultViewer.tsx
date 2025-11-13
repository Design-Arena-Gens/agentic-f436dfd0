export function ResultViewer({ videoUrl }: { videoUrl?: string }) {

  if (!videoUrl) {
    return (
      <div className="container mt-10 text-white/60 text-sm">
        Your video will appear below.
      </div>
    )
  }

  return (
    <div className="container mt-6">
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
        <video src={videoUrl} controls className="h-full w-full" preload="metadata" />
      </div>
      <div className="mt-3 flex items-center justify-between text-white/70 text-sm">
        <span>Sample output. Not affiliated with OpenAI Sora.</span>
        <a className="underline hover:text-white" href={videoUrl} target="_blank" rel="noreferrer">Open in new tab</a>
      </div>
    </div>
  )
}
