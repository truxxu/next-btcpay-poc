import axios from 'axios';
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from '../styles/Home.module.scss'
import head from '../public/images/head.jpg'
import axiosClient from '../api/bitpay'
import Marquee from '../components/Marquee'
import Price from '../components/Price'

const marqueeText = "no gods, no countries, no masters"

interface Props {
  rate?: number; 
}

const Home: NextPage<Props> = ({rate}) => {
  return (
    <div>
      <Head>
        <title>Future of Payments is Now!</title>
        <meta name="description" content="BTCPay POC" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          src={head}
          alt="retro head picture"
          width={300}
          height={300}
          placeholder="blur"
        />
        <h1 className={styles.title}>
          Crypto Payments
        </h1>
        <Marquee text={marqueeText}/>
        <Price sats={100} rate={rate}/>
        <div className={styles.button}>
          PAY NOW 
        </div>
      </main>
      <Script src="https://btcpay.machete.com.co/modal/btcpay.js" />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await axiosClient.get('/rates/BTC/COP');
  const rate = response.data.data.rate

  return { props: { rate } }
}

export default Home
