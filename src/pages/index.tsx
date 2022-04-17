import type { NextPage } from 'next'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import RedirectLink from '@components/RedirectLink'
import { Typewriter } from 'react-simple-typewriter'
import { useTranslation } from 'next-i18next'
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
        <h1 className='text-2xl font-bold'>Hey, I&#39;m Jhorman.</h1>
        <div className='space-y-2'>
          <p className='text-lg'>I&#39;m a full-stack developer from Peru. My passion is software development and I like <b><Typewriter words={['to solve problems', 'team work', 'to learn new things']} typeSpeed={40} deleteSpeed={20} loop={false} cursorStyle={'_'} cursor={true} /></b></p>
          <p className='text-lg'>I invite you to see my <RedirectLink href='/blog'>articles</RedirectLink>, my <RedirectLink href='/projects'>projects</RedirectLink> and more information <RedirectLink href='/me'>about me</RedirectLink>.</p>
        </div>
        <a className="text-gray-400 flex items-center gap-2 hover:underline" href={myGithub?.html_url} target="_blank" rel="noreferrer">
          <div className='h-5 w-5 relative dark:invert'>
            <Image src={`/svg/github.svg`} layout="fill" alt="github" />
          </div>
          {myGithub?.followers} followers on Github
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
