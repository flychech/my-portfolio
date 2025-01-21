import { useTranslation } from 'react-i18next'

import PersonalData from '../PersonalData'
import AboutMe from '../AboutMe'
import ExperienceNode from '../ExperienceNode'
import ExperienceWithLanguage from '../../data/ExperienceWithLanguage'
import ROCKET from './../../assets/rocket_launch.png'
import MEDAL from './../../assets/workspace_premium.png'
import LANGUAGE from './../../assets/language.png'
import CELEBRATION from './../../assets/celebration.png'
import INSTA from './../../assets/instagram.svg'
import FACEBOOK from './../../assets/facebook.svg'
import LINKEDIN from './../../assets/linkedin.svg'

export default function MainContainer() {
  const { i18n, t } = useTranslation('experience')
  const { language = '' } = i18n

  function changeLanguage(lang: string) {
    i18n.changeLanguage(lang)
  }

  const experience = ExperienceWithLanguage('professional')
  const sideProjects = ExperienceWithLanguage('sideProjects')
  const justForFun = ExperienceWithLanguage('justForFun')

  return (
    <div>
      <div className="text-slate-100 min-h-dvh max-w-screen-xl m-auto flex flex-1 flex-col justify-between gap-4 py-6 p-5 sm:px-12 lg:flex-row lg:px-8 lg:p-0">
        <header className="flex flex-col justify-between w-full max-h-screen lg:py-12 lg:sticky lg:top-0 lg:w-1/2">
          <div>
            <PersonalData />
            <div className="mt-4 mb-6 lg:mt-12 lg:mb-0">
              <div
                className="transition-all active:transform active:translate-y-1 text-sm flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  changeLanguage(language.includes('es') ? 'en' : 'es')
                }}
              >
                <img src={LANGUAGE} className="w-4 h-4" />
                {language.includes('en') ? 'Cambiar a Español' : 'Switch to English'}
              </div>
            </div>
          </div>

          <div className="flex gap-2 lg:gap-6">
            <img
              src={INSTA}
              className="w-7 h-7 opacity-60 hover:opacity-90 cursor-pointer transition-opacity duration-300"
              onClick={() => window.open('https://www.instagram.com/flychech.dev/')}
            />
            <img
              src={FACEBOOK}
              className="w-7 h-7 opacity-60 hover:opacity-90 cursor-pointer transition-opacity duration-300"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=100008509244978')}
            />
            <img
              src={LINKEDIN}
              className="w-7 h-7 opacity-60 hover:opacity-90 cursor-pointer transition-opacity duration-300"
              onClick={() =>
                window.open('https://www.linkedin.com/in/sergio-alvarez-mendi%C3%A1bal-a5a826a0/')
              }
            />
          </div>
        </header>

        <main className="w-full lg:w-1/2 lg:py-12">
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

          <div className="mt-24 mb-7 font-semibold text-lg flex gap-3 items-center">
            <img src={CELEBRATION} className="animate-side w-6 h-6" /> {t('justForFunTitle')}
          </div>

          <div className="flex flex-col gap-16">
            {justForFun.map((company) => {
              return <ExperienceNode company={company} key={company.id} />
            })}
          </div>
        </main>
      </div>
    </div>
  )
}
