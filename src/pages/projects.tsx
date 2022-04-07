import { NextPage } from "next"
import { useEffect, useState } from "react"
import CardProject from "@components/CardProject"
import { Project } from "@models/project"
import sRepository from "@services/RepositoryService"

const Projects: NextPage = () => {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    sRepository.all()
      .then((data) => {
        setProjects(data)
      })
  }, [])

  return (
    <div className='flex flex-col'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Projects</h1>
        <p>Some of my public projects. View them all on GitHub.</p>
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-4'>
        {projects.filter(project => project.visible).map((project, index) => (
          <CardProject key={index} project={project} priority={index < 6? true : false} />
        ))}
      </div>
    </div>
  )
}

export default Projects