import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainSection from '@components/MainSection'
import ProjectsSection from '@components/ProjectsSection'
import MeSection from '@components/MeSection'

const Home: NextPage = () => {
  return (
    <>
      <MainSection></MainSection>
      <ProjectsSection />
      <MeSection />
    </>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Home
