"use client"

import { useState } from 'react'
import { Hero } from '@/components/Hero'
import { PromptForm } from '@/components/PromptForm'
import { ResultViewer } from '@/components/ResultViewer'

export default function Page() {
  const [videoUrl, setVideoUrl] = useState<string | undefined>()

  return (
    <main>
      <Hero />
      <PromptForm onResult={(url) => { setVideoUrl(url) }} />
      <ResultViewer videoUrl={videoUrl} />
    </main>
  )
}
