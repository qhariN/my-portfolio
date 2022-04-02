import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>𝐉𝐡𝐨𝐫𝐦𝐚𝐧 𝐑𝐮𝐬</title>
        <meta name="description" content="Jhorman Ruswel Tito Tito Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
