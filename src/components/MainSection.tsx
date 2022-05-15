import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { Trans } from 'next-i18next'
import { useTranslation } from 'next-i18next'
import RedirectLink from '@components/RedirectLink'

const MainSection: React.FC = () => {
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
    <section className='flex flex-col-reverse sm:flex-row items-center gap-6 my-auto'>
      <div className='flex flex-col space-y-5'>
        <div className='space-y-1'>
          <h1 className='text-3xl font-bold'>Jhorman Ruswel Tito</h1>
          <h2 className='text-xl font-bold text-gray-400'>{t('webDeveloper')}</h2>
        </div>
        <div className='space-y-2'>
          <p>{t('myDescription')} <b><Typewriter words={t('iLike', { returnObjects: true })} typeSpeed={40} deleteSpeed={20} loop={false} cursorStyle={'_'} cursor={true} /></b></p>
          <p>
            <Trans i18nKey="iInviteYou" values={{ articles: t('articles'), projects: t('projects'), aboutMe: t('aboutMe') }}>
              <RedirectLink href='/blog' />
              <RedirectLink href='/#projects' />
              <RedirectLink href='/#me' />
            </Trans>
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <a href="https://linkedin.com/in/jhormanrus/" target="_blank" rel="noreferrer">
            <div className='h-5 w-5 relative'>
              <Image src={`/svg/linkedin.svg`} layout="fill" alt="linkedin" />
            </div>
          </a>
          <a className="text-gray-400 flex items-center gap-2 hover:underline" href={myGithub?.html_url} target="_blank" rel="noreferrer">
            <div className='h-5 w-5 relative dark:invert'>
              <Image src={`/svg/github.svg`} layout="fill" alt="github" />
            </div>
            {t('followersOnGithub', { followers: myGithub?.followers })}
          </a>
        </div>
      </div>
      <div>
        <div className='h-64 w-64 relative before:absolute before:inset-2 before:rounded-[59%_41%_81%_19%/70%_22%_78%_30%] before:bg-gradient-to-r from-teal-700 to-cyan-800'>
          <Image className='rounded-[37%_63%_55%_45%/30%_41%_59%_70%] shadow-slate-700 grayscale' src="/img/profile.jfif" layout='fill' alt='profile' priority />
        </div>
      </div>
    </section>
  )
}

export default MainSection