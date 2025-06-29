import { useCallback } from 'react'

type DataLayerEvent = {
  event: string
  [key: string]: unknown
}

const hasDataLayer = (
  win: typeof window
): win is typeof window & { dataLayer: DataLayerEvent[] } => {
  return (
    typeof win !== 'undefined' &&
    'dataLayer' in win &&
    Array.isArray(win.dataLayer)
  )
}

export const useGtmEvent = () => {
  return useCallback((eventName: string, data?: Record<string, unknown>) => {
    if (!hasDataLayer(window)) return

    window.dataLayer.push({
      event: eventName,
      ...data,
    })
  }, [])
}
