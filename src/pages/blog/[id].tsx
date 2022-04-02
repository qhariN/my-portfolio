import { NextPage } from "next"
import { useRouter } from "next/router"

const BlogById: NextPage = () => {
  const { query } = useRouter()

  return (
    <>
      blog {query.id}
    </>
  )
}

export default BlogById