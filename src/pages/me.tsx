import { NextPage } from "next"
import Link from "next/link"

const Me: NextPage = () => {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold"><span className="underline decoration-4 decoration-teal-600">Jhorman Rus</span>wel Tito Tito</h1>
      <div>
        <h2 className="text-xl font-bold">FULL STACK DEVELOPER</h2>
        <p className="text-lg text-gray-400">Systems Engineer in Lima, Perú</p>
      </div>
      <section>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li><b>Email</b> - jhormanrus [at] gmail [dot] com</li>
          <li><b>Phone</b> - +51 933 844 567</li>
          <li><b>LinkedIn</b> - <a href="https://linkedin.com/in/jhormanrus/" className="hover:underline decoration-2 decoration-teal-600">Jhorman Ruswel Tito Tito</a></li>
          <li><b>Github</b> - <a href="https://github.com/jhormanrus" className="hover:underline decoration-2 decoration-teal-600">jhormanrus</a></li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">ABOUT ME</h2>
        <p>I&#39;m a Junior Full Stack Developer with two years of experience in industry software development. I seek to explore new experiences as a developer for my professional growth.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">EXPERIENCE</h2>
        <div>
          <h3 className="text-lg font-bold flex">Frontend Developer <span className="text-gray-400 font-normal ml-auto whitespace-nowrap">Mar 2020 - Dec 2021</span></h3>
          <p className="text-lg">ADRA PERÚ — Lima, Perú</p>
        </div>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li>Develop software to simplify and automate the processes of different areas of ADRA PERÚ.</li>
          <li>Attention and resolution of software problems.</li>
          <li>Management of users and profiles of the different systems.</li>
          <li><b>Tools used:</b> VS Code, Github Desktop, Gitlab, Postman, Swagger, Jenkins, Kubernetes, Portainer, Storybook, and Angular.</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">SKILLS</h2>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li><b>Languages</b> - Javascript, Typescript, SQL, HTML5, CSS3, JSON</li>
          <li><b>Frontend Technologies</b> - Angular, React, Next.js, Vue.js, npm, Bootstrap 4/5, Tailwind</li>
          <li><b>Backend Technologies</b> - Express, NestJS, Node.js</li>
          <li><b>Concepts</b> - Web Application Development, REST API, Databases <span className="text-gray-400">(PostgreSQL, MySQL, SQLite)</span>, Version Control <span className="text-gray-400">(Git, Github, Gitlab)</span>, Containerization Strategy <span className="text-gray-400">(Docker)</span>, PWA, SSR, SEO, Open Graph protocol</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">PROJECTS</h2>
        <p>See <Link href="/projects"><a className="font-bold hover:underline decoration-2 decoration-teal-600">My projects</a></Link> or <a href="https://github.com/jhormanrus" className="font-bold hover:underline decoration-2 decoration-teal-600">My Github</a> for all open-source projects.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">EDUCATION</h2>
        <div>
          <h3 className="text-lg font-bold flex">Bachelor of Systems Engineering <span className="text-gray-400 font-normal ml-auto whitespace-nowrap">2017 - 2021</span></h3>
          <p className="text-lg">Universidad Peruana Unión — Lima, Perú</p>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">LANGUAGES</h2>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li><b>Spanish</b> — Native speaker</li>
          <li><b>English</b> — B1</li>
          <li><b>Portuguese</b> — A2</li>
        </ul>
      </section>
    </div>
  )
}

export default Me