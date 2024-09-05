import PersonalData from '../PersonalData'
import AboutMe from '../AboutMe'
import ExperienceNode from '../ExperienceNode'
import experience from './../../data/experience'

export default function MainContainer() {
  return (
    <div className="text-slate-100 min-h-dvh max-w-screen-xl m-auto flex flex-1 flex-row justify-between gap-4 lg:px-8 md:px-4">
      <header className="w-1/2 max-h-screen lg:py-12 lg:sticky lg:top-0">
        <PersonalData />
      </header>
      <main className="w-1/2 lg:py-12">
        <AboutMe />
        <div className="flex flex-col gap-16">
          {experience.map((company) => {
            return <ExperienceNode company={company} key={company.id} />
          })}
        </div>
      </main>
    </div>
  )
}
