'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const PhiLatticeBackground = dynamic(() => import('./PhiLatticeBackground'), { ssr: false })
const CustomCursor = dynamic(() => import('./CustomCursor'), { ssr: false })
const DataXChatbot = dynamic(() => import('./DataXChatbot'), { ssr: false })

export default function ClientOverlays() {
  const [showNonCritical, setShowNonCritical] = useState(false)

  useEffect(() => {
    const show = () => setShowNonCritical(true)
    const idleId =
      typeof window.requestIdleCallback === 'function'
        ? window.requestIdleCallback(show, { timeout: 1800 })
        : window.setTimeout(show, 1200)

    return () => {
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleId)
      else window.clearTimeout(idleId)
    }
  }, [])

  if (!showNonCritical) return null

  return (
    <>
      <PhiLatticeBackground />
      <CustomCursor />
      <DataXChatbot />
    </>
  )
}
