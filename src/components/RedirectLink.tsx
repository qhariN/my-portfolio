import Link from "next/link"

interface Props {
  href: string
}

const RedirectLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='underline decoration-2 decoration-teal-600 transition-colors hover:decoration-cyan-700 font-bold'>
        {children}
      </a>
    </Link>
  )
}

export default RedirectLink