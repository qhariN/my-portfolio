import { Trans, useTranslation } from "next-i18next"
import { useRouter } from "next/router"

const MeSection: React.FC = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <section id="me" className="pt-20 space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{t('+aboutMe')}</h2>
        <p>{t('aboutMeDescription')}</p>
      </div>
      <section>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li><b>{t('email')}</b> - jhormanrus [at] gmail [dot] com</li>
          <li><b>LinkedIn</b> - <a href="https://linkedin.com/in/jhormanrus/" className="hover:underline decoration-2 decoration-teal-600">Jhorman Ruswel Tito Tito</a></li>
          <li><b>Github</b> - <a href="https://github.com/jhormanrus" className="hover:underline decoration-2 decoration-teal-600">jhormanrus</a></li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">{t('experience')}</h2>
        <div>
          <h3 className="text-lg font-bold flex">{t('frontendDeveloper')} <span className="text-gray-400 font-normal ml-auto whitespace-nowrap">{new Date(Date.UTC(2020, 3)).toLocaleString(router.locale, { month: 'short', year: 'numeric' })} - {new Date(Date.UTC(2021, 12)).toLocaleString(router.locale, { month: 'short', year: 'numeric' })}</span></h3>
          <p className="text-lg">ADRA PERÚ — {t('limaPeru')}</p>
        </div>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <Trans i18nKey="experienceDescription">
            <li></li>
          </Trans>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">{t('skills')}</h2>
        <ul className="list-disc marker:text-teal-600 pl-5">
          <li><b>{t('languages')}</b> - Javascript, Typescript, SQL, HTML5, CSS3, JSON</li>
          <li><b>{t('frontendTechnologies')}</b> - Angular, React, Next.js, Vue.js, npm, Bootstrap 4/5, Tailwind</li>
          <li><b>{t('backendTechnologies')}</b> - Express, NestJS, Node.js</li>
          <li><b>{t('concepts')}</b> - Web Application Development, REST API, Databases <span className="text-gray-400">(PostgreSQL, MySQL, SQLite)</span>, Version Control <span className="text-gray-400">(Git, Github, Gitlab)</span>, Containerization Strategy <span className="text-gray-400">(Docker)</span>, PWA, SSR, SEO, Open Graph protocol</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">{t('education')}</h2>
        <div>
          <h3 className="text-lg font-bold flex">{t('degree')} <span className="text-gray-400 font-normal ml-auto whitespace-nowrap">2017 - 2021</span></h3>
          <p className="text-lg">Universidad Peruana Unión — {t('limaPeru')}</p>
        </div>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-bold border-b-2 dark:border-neutral-700">{t('languages')}</h2>
        <ul className="list-disc marker:text-teal-600 pl-5">
          {(t('languagesList', { returnObjects: true }) as string[]).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default MeSection
