import Head from 'next/head'
import Link from 'next/link'
import { initializeApollo } from '../lib/apolloClient';
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
          <Link href= "/pageWithHexagon">
            <a className={styles.card}>
              <h3>Page with hexagon</h3>
            </a>
          </Link>

          <Link href="/api/hello">
            <a className={styles.card}>
              <h3>hello API</h3>
            </a>
          </Link>

          <Link href="/api/graphql">
            <a className={styles.card}>
              <h3>Apollo Playground</h3>
            </a>
          </Link>

          {/* <Link href="">
            <a className={styles.card}>
              <h3>Grüße</h3>
            </a>
          </Link> */}
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
}
