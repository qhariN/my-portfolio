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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://jhormanrus.vercel.app/" />
        <meta name="title" content="Jhorman Ruswel Tito Tito" />
        <meta name="description" content="Web Developer. Passionate about software development and I like to learn new things, solve problems and team work." />
        <meta name="author" content="Jhorman Ruswel Tito Tito" />
        <meta name="robots" content="index,follow" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default appWithTranslation(MyApp)
