'use client'

import * as React from 'react'
import { Slider } from '@/components/ui/slider'

export default function SliderPage() {
  const [sliderValue, setSliderValue] = React.useState(0)
  const [rangeValue, setRangeValue] = React.useState([10, 20])

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>Slider Values: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        onValueChange={(value) => setSliderValue(value[0])}
        max={100}
        step={1}
      />

      <span>Slider Values: {rangeValue.join(',')}</span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={setRangeValue}
        max={100}
        step={1}
      />
    </div>
  )
}
