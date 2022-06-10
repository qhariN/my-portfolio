import type { NextApiRequest, NextApiResponse } from 'next'
import sRepository from '@services/RepositoryService'
import { Project } from '@models/project'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Project[]>
) {
  await sRepository.all().then((data) => {
    res.status(200).json(data)
  })
}
