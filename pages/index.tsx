import { time } from 'console'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Countdown } from '../components/Countdown'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
  days: number
}

const Home: NextPage = () => {
  let [days, setDays] = useState(7)

  const calculateTimeLeft = () => {
    let date = new Date()
    let difference =
      +new Date(
        `${date.getMonth() + 1}/${date.getDate() + days}/${date.getFullYear()}`
      ) - +new Date()

    let timeLeft: TimeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      days: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearTimeout(timer)
  })

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center
     bg-gradient-to-b from-[#18161f] to-[#231b3c]"
    >
      <Head>
        <title>Launch Countdown</title>
        <link
          rel="shortcut icon"
          href="./images/favicon-32x32.png"
          type="image/x-icon"
        />
      </Head>

      <div
        className="flex min-h-screen min-w-full flex-col
       items-center justify-between bg-[url('/images/bg-stars.svg')]"
      >
        <Header></Header>
        <Countdown
          hour={timeLeft.hours}
          minutes={timeLeft.minutes}
          seconds={timeLeft.seconds}
          days={timeLeft.days}
        ></Countdown>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
