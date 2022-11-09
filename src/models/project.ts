export interface Project {
  name:        string
  github_name: string
  images:      string[]
  npm:         string | null
  demo:        boolean
  visible:     boolean
}
