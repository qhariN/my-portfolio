import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RedirectLink from '@components/RedirectLink'
import { Typewriter } from 'react-simple-typewriter'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const [myGithub, setMyGithub] = useState<any>(null)

  useEffect(() => {
    fetch('https://api.github.com/users/jhormanrus')
      .then(res => res.json())
      .then(result => {
        setMyGithub(result)
      }, error => {
        console.log(error)
      })
  }, [])

  return (
    <div className='flex flex-col-reverse md:flex-row items-center gap-6 my-auto'>
      <div className='flex flex-col space-y-4'>
        <h1 className='text-2xl font-bold'>{t('heyImJhorman')}</h1>
        <div className='space-y-2'>
          <p className='text-lg'>{t('iAmASoftwareDeveloper')} <b><Typewriter words={t('iLike', { returnObjects: true })} typeSpeed={40} deleteSpeed={20} loop={false} cursorStyle={'_'} cursor={true} /></b></p>
          <p className='text-lg'>
            <Trans i18nKey="iInviteYou" values={{ articles: t('articles'), projects: t('projects'), aboutMe: t('aboutMe') }}>
              <RedirectLink href='/blog' />
              <RedirectLink href='/projects' />
              <RedirectLink href='/me' />
            </Trans>
          </p>
        </div>
        <a className="text-gray-400 flex items-center gap-2 hover:underline" href={myGithub?.html_url} target="_blank" rel="noreferrer">
          <div className='h-5 w-5 relative dark:invert'>
            <Image src={`/svg/github.svg`} layout="fill" alt="github" />
          </div>
          {t('followersOnGithub', { followers: myGithub?.followers })}
        </a>
      </div>
      <div>
        <div className='h-64 w-64 relative'>
          <Image className='rounded-xl shadow-slate-700' src="/img/profile.jfif" layout='fill' alt='profile' priority />
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Home
