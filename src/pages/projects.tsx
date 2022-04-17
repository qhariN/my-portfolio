import { NextPage } from "next"
import { useEffect, useState } from "react"
import CardProject from "@components/CardProject"
import { Project } from "@models/project"
import sRepository from "@services/RepositoryService"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import { Trans, useTranslation } from "next-i18next"

const Projects: NextPage = () => {
  const { t } = useTranslation()
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
        <h1 className='text-2xl font-bold'>{t('projects')}</h1>
        <p>
          <Trans i18nKey="projectsDescription">
            <a href="https://github.com/jhormanrus" className="font-bold hover:underline decoration-teal-600 decoration-2" />
          </Trans>
        </p>
      </div>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 mt-4'>
        {projects.filter(project => project.visible).map((project, index) => (
          <CardProject key={index} project={project} priority={index < 6? true : false} />
        ))}
      </div>
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Projects