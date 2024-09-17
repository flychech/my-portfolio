import { useTranslation } from 'react-i18next'

import PersonalData from '../PersonalData'
import AboutMe from '../AboutMe'
import ExperienceNode from '../ExperienceNode'
import ExperienceWithLanguage from '../../data/ExperienceWithLanguage'
import ROCKET from './../../assets/rocket_launch.png'
import MEDAL from './../../assets/workspace_premium.png'

export default function MainContainer() {
  const { i18n, t } = useTranslation('experience')
  const { language = '' } = i18n

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang)
  }

  const experience = ExperienceWithLanguage('professional')
  const sideProjects = ExperienceWithLanguage('sideProjects')

  return (
    <div className="text-slate-100 min-h-dvh max-w-screen-xl m-auto flex flex-1 flex-row justify-between gap-4 lg:px-8 md:px-4">
      <div className="w-1/2 max-h-screen lg:py-12 lg:sticky lg:top-0">
        <header>
          <PersonalData />
        </header>
        <button
          className="transition-all active:transform active:translate-y-1"
          onClick={() => {
            changeLanguage(language.includes('es') ? 'en' : 'es')
          }}
        >
          {language.includes('en') ? 'Español' : 'English'}
        </button>
      </div>

      <main className="w-1/2 lg:py-12">
        <AboutMe />

        <div className="mb-7 font-semibold text-lg flex gap-3 items-center">
          <img src={ROCKET} className="animate-fly w-6 h-6" /> {t('professionalTitle')}
        </div>

        <div className="flex flex-col gap-16">
          {experience.map((company) => {
            return <ExperienceNode company={company} key={company.id} />
          })}
        </div>

        <div className="mt-24 mb-7 font-semibold text-lg flex gap-3 items-center">
          <img src={MEDAL} className="animate-side w-6 h-6" /> {t('sideTitle')}
        </div>

        <div className="flex flex-col gap-16">
          {sideProjects.map((company) => {
            return <ExperienceNode company={company} key={company.id} />
          })}
        </div>
      </main>
    </div>
  )
}
