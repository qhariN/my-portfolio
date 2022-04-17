import { NextPage } from "next"
import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

const Blog: NextPage = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col flex-grow'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>{ t('articles') }</h1>
        <p>{t('articlesDescription')}</p>
      </div>
      <p className="text-center my-auto text-xl">{t('noArticles')}</p>
    </div>
  )
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale),
  },
})

export default Blog