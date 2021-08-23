import styles from './Layout.module.scss'
import Footer from './Footer'

export default function Layout({ children }: {children: React.ReactNode}) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <Footer />
    </div>
  )
}