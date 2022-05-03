import React, { useEffect, useState } from 'react'
import { NumberBox } from './NumberBox'

interface CountdownProps {
  hour: number
  minutes: number
  seconds: number
  days: number
}

export const Countdown = ({ hour, minutes, seconds, days }: CountdownProps) => {
  return (
    <div className="mb-48 flex flex-row space-x-8 md:space-x-20">
      <NumberBox unit="days" value={days}></NumberBox>
      <NumberBox unit="hour" value={hour}></NumberBox>
      <NumberBox unit="minutes" value={minutes}></NumberBox>
      <NumberBox unit="seconds" value={seconds}></NumberBox>
    </div>
  )
}
