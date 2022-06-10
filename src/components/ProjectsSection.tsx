import { useEffect, useState } from "react"
import CardProject from "@components/CardProject"
import { Project } from "@models/project"
import { Trans, useTranslation } from "next-i18next"
import Fetch from "@services/api"

const ProjectsSection: React.FC = () => {
  const { t } = useTranslation()
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    Fetch('/api/projects').then(res => {
      setProjects(res)
    })
  }, [])

  return (
    <section id="projects" className='flex flex-col pt-20'>
      <div className="space-y-2">
        <h2 className='text-2xl font-bold'>{t('projects')}</h2>
        <p>
          <Trans i18nKey="projectsDescription">
            <a href="https://github.com/jhormanrus" className="font-bold hover:underline decoration-teal-600 decoration-2" />
          </Trans>
        </p>
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 mt-6'>
        {projects.filter(project => project.visible).map((project, index) => (
          <CardProject key={index} project={project} priority={index < 6? true : false} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection