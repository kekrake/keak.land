import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>KEAKproject</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenue" />
        <p className="description">
          "nous revenons bientot, on a besoin d'une pause" <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
