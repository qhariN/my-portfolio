import { NextPage } from "next"

const Blog: NextPage = () => {
  return (
    <div className='flex flex-col flex-grow'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Articles</h1>
        <p>Tutorials, technical articles, snippets, and all development-related resources I&#39;ve written.</p>
      </div>
      <p className="text-center my-auto text-xl">No articles yet</p>
    </div>
  )
}

export default Blog