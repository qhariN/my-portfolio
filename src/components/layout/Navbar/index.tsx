import Image from "next/image";
import { Disclosure, Listbox, Transition } from '@headlessui/react';
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";

export default function Navbar () {
  const router = useRouter()
  const { t } = useTranslation()
  const activeLink = (link: string) => router.asPath === link
  const [darkTheme, setDarkTheme] = useState<boolean | null>(null)
  const navigation = [
    // { name: t('articles'), href: '/blog', icon: 'article.svg' },
    { name: t('projects'), href: '/#projects', icon: 'coding.svg' },
    { name: t('aboutMe'), href: '/#me', icon: 'resume.svg' }
  ]

  useEffect(() => {
    if (darkTheme !== null) {
      if (darkTheme) {
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
      } else {
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
      }
    }
  }, [darkTheme])

  useEffect(() => {
    setTimeout(() => {
      setDarkTheme(document.documentElement.classList.contains('dark'))
    })
  }, [])

  const onLocaleChange = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}`
    router.push(router.asPath, router.asPath, { locale, scroll: false })
  }

  return (
    <Disclosure as="nav" className="sticky top-0 border-b-2 bg-white dark:bg-zinc-900 dark:border-neutral-700 z-10">
      {({ open }) => (
        <>
          <div className="max-w-screen-md mx-auto px-2 sm:px-6 lg:px-8 py-2">
            <div className="relative flex items-center justify-between">
              <div className="inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2">
                  <span className="sr-only">Open main menu</span>
                  {
                    open ? (
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )
                  }
                </Disclosure.Button>
              </div>
              <Link href="/#">
                <a className={`flex items-center gap-2 text-black dark:text-white text-sm font-bold ${activeLink('/#') ? 'underline decoration-teal-600 decoration-2' : 'hover:underline hover:decoration-slate-400'}`} aria-current={activeLink('/') ? 'page' : undefined}>
                  <div className="h-9 w-9 relative">
                    <Image className="rounded-full bg-gray-300 dark:bg-neutral-700" src="/img/logo.png" alt="Logo" layout="fill" />
                  </div>
                  Jhorman Rus
                </a>
              </Link>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:block">
                  <div className="flex space-x-2 text-sm text-gray-400 uppercase">
                    {navigation.map(item => (
                      <Link key={item.name} href={item.href}>
                        <a className={`flex items-center gap-2 ${activeLink(item.href) ? 'text-black dark:text-white underline decoration-teal-600 decoration-2 px-3 py-2' : 'hover:underline px-3 py-2'}`} aria-current={activeLink(item.href) ? 'page' : undefined}>
                          <div className="h-5 w-5 relative">
                            <Image src={`/svg/${item.icon}`} alt={item.name} layout="fill" />
                          </div>
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setDarkTheme(!darkTheme)} type="button" className="flex justify-center items-center w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700" title={`Enable ${darkTheme? 'light' : 'dark'} mode`}>
                  <span className="sr-only">Light mode</span>
                  <div className="w-5 h-5 relative">
                    <Image src={`/svg/${darkTheme? 'sun' : 'moon'}.svg`} alt="light mode" layout="fill"></Image>
                  </div>
                </button>
                <Listbox value={router.locale} onChange={onLocaleChange}>
                  <div className="relative">
                    <Listbox.Button className="relative w-full py-1 px-2 rounded-lg border-2 dark:border-neutral-700 uppercase sm:text-sm">
                      {router.locale}
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute w-full mt-1 overflow-auto text-center uppercase bg-white dark:bg-zinc-900 rounded-lg border-2 dark:border-neutral-700 focus:outline-none sm:text-sm">
                        {router.locales?.map((lang) => (
                          <Listbox.Option
                            key={lang}
                            className={({ active }) => `cursor-pointer select-none py-1.5 ${active && 'underline'}`}
                            value={lang}
                          >
                            {lang}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <div className="px-2 pb-2 space-y-1 text-sm text-gray-400 uppercase">
                {navigation.map(item => (
                  <Link key={item.name} href={item.href} passHref>
                    <a onClick={() => { close() }} className={`flex items-center gap-2 ${activeLink(item.href) ? 'text-black dark:text-white underline decoration-teal-600 decoration-2 px-3 py-2 ' : 'hover:underline px-3 py-2'}`} aria-current={activeLink(item.href) ? 'page' : undefined}>
                      <div className="h-5 w-5 relative">
                        <Image src={`/svg/${item.icon}`} alt={item.name} layout="fill" />
                      </div>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}