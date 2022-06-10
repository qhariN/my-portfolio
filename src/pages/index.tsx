import React from 'react'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import HeroSection from '@components/HeroSection'
import ProjectsSection from '@components/ProjectsSection'
import MeSection from '@components/MeSection'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection></HeroSection>
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
