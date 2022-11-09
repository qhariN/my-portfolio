import { useTranslation } from "next-i18next";
import Image from "next/image";

const technologies = [
  { name: 'Typescript', icon: 'typescript.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
  { name: 'PostCss', icon: 'postcss.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'Vercel', icon: 'vercel.svg' },
]

const socials = [
  { name: 'Github', href: 'https://github.com/jhormanrus', icon: 'github.svg', invert: true },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/jhormanrus/', icon: 'linkedin.svg', invert: false },
  { name: 'Dev.to', href: 'https://dev.to/jhormanrus', icon: 'devto.svg', invert: true }
]

export default function Footer () {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-50 dark:bg-zinc-900 mt-auto">
      <div className="flex flex-col space-y-1 max-w-screen-md mx-auto w-full px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col items-center space-y-2 pb-1">
          <p>{t('projectMadeWith')}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {technologies.map(item => (
              <div key={item.name} className="h-9 w-9 relative">
                <Image src={`/svg/${item.icon}`} layout="fill" alt={item.name} title={item.name} />
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-2 dark:border-neutral-700" />
        <div className="flex items-center w-full text-xs">
          <div className="flex">
            <span className="hidden sm:block">{t('developedWithLove')} <u>Jhorman Rus</u></span>
            <span className="sm:hidden">{t('by')} <u>Jhorman Rus</u></span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {socials.map(item => (
              <a key={item.name} className={`h-5 w-5 relative ${item.invert && 'dark:invert'}`} href={item.href} target="_blank" rel="noreferrer">
                <Image src={`/svg/${item.icon}`} layout="fill" alt={item.name} title={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}