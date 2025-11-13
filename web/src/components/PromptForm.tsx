"use client"

import { useState } from 'react'

const SAMPLE_PROMPTS = [
  'A cinematic drone shot over neon-lit Tokyo at night',
  'A golden retriever surfing a wave at sunrise',
  'A tiny astronaut tending a bonsai in zero gravity',
]

export function PromptForm({ onResult }: { onResult: (url: string) => void }) {
  const [prompt, setPrompt] = useState(SAMPLE_PROMPTS[0])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      if (!res.ok) throw new Error('Failed to generate')
      const data = await res.json()
      onResult(data.videoUrl)
    } catch (err: any) {
      setError(err?.message ?? 'Unexpected error')
    } finally {
      setIsLoading(false)
    }
  }

  function randomPrompt() {
    const idx = Math.floor(Math.random() * SAMPLE_PROMPTS.length)
    setPrompt(SAMPLE_PROMPTS[idx])
  }

  return (
    <form onSubmit={handleGenerate} className="container">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto]">
        <div className="flex gap-2">
          <input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="input flex-1"
            placeholder="Describe the video you want..."
          />
          <button type="button" onClick={randomPrompt} className="px-3 rounded-md border border-white/10 text-white/70 hover:text-white">
            Surprise me
          </button>
        </div>
        <button disabled={isLoading} className="btn-primary min-h-12">
          {isLoading ? 'Generating?' : 'Generate'}
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-300">{error}</p>}
    </form>
  )
}
