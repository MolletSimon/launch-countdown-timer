import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center
     bg-gradient-to-b from-[#18161f] to-[#231b3c]">
      <Head>
        <title>Launch Countdown</title>
        <link rel="shortcut icon" href="./images/favicon-32x32.png" type="image/x-icon" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between
       min-w-full items-center bg-[url('/images/bg-stars.svg')]">
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Home
