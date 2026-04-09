import { useEffect, useState } from 'react'

export const useRotatingItems = (items, intervalMs = 60_000) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!Array.isArray(items) || items.length <= 1) {
      return undefined
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % items.length)
    }, intervalMs)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [intervalMs, items])

  return {
    activeIndex,
    activeItem: items[activeIndex] ?? items[0],
  }
}
