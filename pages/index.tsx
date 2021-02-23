import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Well hello there
        </h1>

        <p className={styles.description}>hi</p>

        <div className={styles.grid}>
          <Link href="http://localhost:3000/pageWithHexagon">
            <a className={styles.card}>
              <h3>go to page with hexagon</h3>
            </a>
          </Link>

          <Link href="http://localhost:3000/api/hello">
            <a className={styles.card}>
              <h3>go to hello API</h3>
            </a>
          </Link>

          <Link href="">
            <a className={styles.card}>
              <h3>Hello</h3>
            </a>
          </Link>

          <Link href="">
            <a className={styles.card}>
              <h3>Grüße</h3>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
