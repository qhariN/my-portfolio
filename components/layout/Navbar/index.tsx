import Image from "next/image";
import { Disclosure } from '@headlessui/react';
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: 'Articles', href: '/blog', icon: 'article.svg' },
  { name: 'Projects', href: '/projects', icon: 'coding.svg' },
  { name: 'About me', href: '/me', icon: 'sd-card.svg' }
]

export default function Navbar () {
  const router = useRouter()
  const activeLink = (link: string) => router.pathname === link

  return (
    <Disclosure as="nav" className="sticky top-0 border-b-2 bg-white z-10">
      {({ open }) => (
        <>
          <div className="max-w-screen-lg mx-auto px-2 sm:px-6 lg:px-8 py-2">
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
              <Link href="/">
                <a className={`flex items-center gap-2 text-black text-sm font-bold ${activeLink('/') ? 'underline' : 'hover:underline'}`} aria-current={activeLink('/') ? 'page' : undefined}>
                  <div className="h-9 w-9 relative">
                    <Image className="rounded-full bg-neutral-700" src="/img/logo.png" alt="Logo" layout="fill" />
                  </div>
                  Jhorman Rus
                </a>
              </Link>
              <div className="flex-1 flex items-center justify-center sm:items-stretch">
                <div className="hidden sm:block">
                  <div className="flex space-x-2 text-sm text-gray-400 uppercase">
                    {navigation.map(item => (
                      <Link key={item.name} href={item.href}>
                        <a className={activeLink(item.href) ? 'flex items-center gap-2 text-black underline px-3 py-2' : 'flex items-center gap-2 hover:underline px-3 py-2'} aria-current={activeLink(item.href) ? 'page' : undefined}>
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
              <div className="flex items-center">
                <button type="button" className="p-1 text-gray-400 hover:text-black">
                  <span className="sr-only">View notifications</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pb-2 space-y-1 text-sm text-gray-400 uppercase">
              {navigation.map(item => (
                <Link key={item.name} href={item.href} passHref>
                  <a className={`flex items-center gap-2 ${activeLink(item.href) ? 'text-black underline px-3 py-2 ' : 'hover:underline px-3 py-2'}`} aria-current={activeLink(item.href) ? 'page' : undefined}>
                    <div className="h-5 w-5 relative">
                      <Image src={`/svg/${item.icon}`} alt={item.name} layout="fill" />
                    </div>
                    {item.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}