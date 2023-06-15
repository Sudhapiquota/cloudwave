import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CloudWave Inc</title>
        <meta name="description" content="CloudWave Inc Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>Loading...</div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
