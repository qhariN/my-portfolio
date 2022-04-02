import { Project } from "@models/project";
import Fetch, { apiUrl } from "./api";

const sRepository = {
  all(): Promise<Project[]> {
    return Fetch(`${apiUrl.npoint}/ce3c4c1ce1c60fc98947`)
  },
  byName(github_name: string) {
    return Fetch(`${apiUrl.github}/repos/${github_name}`)
  }
}

export default sRepository