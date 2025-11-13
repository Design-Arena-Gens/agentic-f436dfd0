import { NextRequest, NextResponse } from 'next/server'

const SAMPLES = [
  // CC0 / public sample videos
  'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
  'https://media.w3.org/2010/05/sintel/trailer.mp4',
  'https://media.w3.org/2010/05/bunny/trailer.mp4',
]

export async function POST(req: NextRequest) {
  const { prompt } = await req.json()
  // Simulate generation latency
  await new Promise((r) => setTimeout(r, 1200))

  // Pick a deterministic sample based on prompt hash
  const idx = Math.abs(hashCode(String(prompt))) % SAMPLES.length
  return NextResponse.json({ videoUrl: SAMPLES[idx] })
}

function hashCode(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  return hash
}
