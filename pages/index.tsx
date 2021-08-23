import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.scss'
import head from '../public/images/head.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
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
          Escape financial institutions
        </h1>
      </main>

      <footer className={styles.footer}>
        <p>Footer goes here</p>
      </footer>
    </div>
  )
}

export default Home
