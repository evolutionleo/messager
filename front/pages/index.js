import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Messager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Haha Next.js go brrrrr</h1>
        {/* Pog! this is a button that does the link thing */}
        <Link href="/chat" passHref>
          <button component="a">
            Go to chat!
          </button>
        </Link>
      </main>

      <footer className={styles.footer}>
        <p>This is totally a footer</p>
      </footer>
    </div>
  )
}
