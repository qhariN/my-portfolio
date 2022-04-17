import '@styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@components/layout/Layout'
import Head from 'next/head'
import { useEffect } from 'react'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })

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

export default appWithTranslation(MyApp)
