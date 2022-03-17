import Link from "next/link"

interface Props {
  href: string
}

const RedirectLink: React.FC<Props> = ({ children, href }) => {
  return (
    <Link href={href}>
      <a className='underline decoration-4 decoration-teal-600 hover:bg-teal-600 font-bold'>
        {children}
      </a>
    </Link>
  )
}

export default RedirectLink