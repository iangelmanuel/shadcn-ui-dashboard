'use client'

import { Calendar } from '@/components/ui/calendar'
import * as React from 'react'

export default function CalendarPage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = React.useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  return (
    <div className="flex sm:flex-wrap sm:flex-row flex-col gap-3">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={date?.getDay() === 0 || date?.getDay() === 6}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
      <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />
      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        {multipleDate?.map((date) => (
          <p key={date.toISOString()}>{date.toLocaleDateString()}</p>
        ))}
      </div>
    </div>
  )
}
