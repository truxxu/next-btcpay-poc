import axios from 'axios';
import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import styles from '../styles/Home.module.scss'
import head from '../public/images/head.jpg'
import bitPayRequest from '../api/bitpay'
import Marquee from '../components/Marquee'
import Price from '../components/Price'

const marqueeText = "no gods, no countries, no masters"

interface Props {
  rate?: number;
  invoiceId?: string;
}

const Home: NextPage<Props> = ({rate, invoiceId}) => {
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
        <div className={styles.button} onClick={() => window.btcpay.showInvoice(invoiceId)}>
          PAY NOW 
        </div>
      </main>
      <Script src="/btcpay.js"/>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const invoiceData = {
    "price": 10000,
    "currency": "COP",
    "orderId": "420",
    "itemDesc": "item description",
    "notificationUrl": "http://localhost:3000/success",
    "redirectURL": "http://localhost:3000/success"
  };

  const axiosClient = axios.create({
    baseURL: process.env.BTCPAY_URL,
    timeout: 15000,
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${process.env.BTCPAY_AUTH}`
    }
  });

  const response = await bitPayRequest.get('/rates/BTC/COP');
  const rate = response.data.data.rate

  const response2 = await axiosClient.post("/invoices", invoiceData);
  const invoiceId = response2.data.data.id;

  return { props: { rate, invoiceId } }
}

export default Home
