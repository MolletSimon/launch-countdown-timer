import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center
     bg-gradient-to-b from-[#18161f] to-[#231b3c]">
      <Head>
        <title>Launch Countdown</title>
        <link rel="shortcut icon" href="./images/favicon-32x32.png" type="image/x-icon" />
      </Head>

      <div className="flex min-h-screen
       min-w-full justify-center mt-32 bg-[url('/images/bg-stars.svg')]">
        <Header></Header>
      </div>
    </div>
  )
}

export default Home
