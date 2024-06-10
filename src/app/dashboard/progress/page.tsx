'use client'

import { useState, useEffect } from 'react'

import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'

export default function ProgressPage() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn(
          progress < 25 && 'bg-red-500',
          progress >= 25 && progress < 50 && 'bg-yellow-500',
          progress >= 50 && progress < 75 && 'bg-green-500',
          progress >= 75 && 'bg-blue-500'
        )}
      />
    </div>
  )
}
