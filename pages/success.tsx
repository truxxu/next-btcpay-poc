import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Success.module.scss'
import escape from '../public/images/escape.jpg'

const Success: NextPage = () => {
  return (
    <div className={styles.container}>
        <Head>
            <title>Future of Payments is Now!</title>
            <meta name="description" content="Successful payment" />
        </Head>
        <p>Your payment has been successful</p>
        <div className={styles.imageContainer}>
            <Image
                src={escape}
                alt="vaporrwave sunset"
                width={300}
                height={300}
                placeholder="blur"
            />
        </div>
        <Link href={"/"}>
            <a>Home</a>
        </Link>
    </div>
  )
}

export default Success
