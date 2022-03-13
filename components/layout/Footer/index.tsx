import Image from "next/image";

const technologies = [
  { name: 'Javascript', icon: 'javascript.svg' },
  { name: 'Typescript', icon: 'typescript.svg' },
  { name: 'Tailwind CSS', icon: 'tailwindcss.svg' },
  { name: 'PostCss', icon: 'postcss.svg' },
  { name: 'Next.js', icon: 'nextjs.svg' },
  { name: 'React', icon: 'react.svg' },
  { name: 'Node.js', icon: 'nodejs.svg' },
  { name: 'Vercel', icon: 'vercel.svg' },
  { name: 'IFTTT', icon: 'ifttt.svg' },
  { name: 'Prisma', icon: 'prisma.svg' },
  { name: 'PostgreSQL', icon: 'postgresql.svg' }
]

const socials = [
  { name: 'Github', href: 'https://github.com/jhormanrus', icon: 'github.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/jhorman-ruswel-tito-tito-8933ba127/', icon: 'linkedin.svg' },
  { name: 'Dev.to', href: 'https://dev.to/jhormanrus', icon: 'devto.svg' }
]

export default function Footer () {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="flex flex-col space-y-1 max-w-screen-lg mx-auto w-full px-2 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col items-center space-y-2 pb-1">
          <p>A project made with</p>
          <div className="flex flex-wrap justify-center gap-4 mb-2">
            {technologies.map(item => (
              <div key={item.name} className="h-9 w-9 relative">
                <Image src={`/svg/${item.icon}`} layout="fill" alt={item.name} title={item.name} />
              </div>
            ))}
          </div>
        </div>
        <hr className="w-full border-t-2" />
        <div className="flex items-center w-full text-xs">
          <div className="flex">
            <span>© {new Date().getFullYear()}</span>
            <span className="hidden sm:block">, developed with ❤️ by <u>Jhorman Rus</u></span>
            <span className="sm:hidden">, by <u>Jhorman Rus</u></span>
          </div>
          <div className="flex items-center gap-2 ml-auto">
            {socials.map(item => (
              <a key={item.name} className="h-5 w-5 relative" href={item.href} target="_blank" rel="noreferrer">
                <Image src={`/svg/${item.icon}`} layout="fill" alt={item.name} title={item.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}