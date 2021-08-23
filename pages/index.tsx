import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import head from '../public/images/head.jpg'
import Marquee from '../components/Marquee'

const marqueeText = " Escape financial institutions - secure - private - decentralized - censorship-resistant - no gods, no countries, no masters"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Future of Payments is Now!</title>
        <meta name="description" content="BTCPa POC" />
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
      </main>
    </div>
  )
}

export default Home
