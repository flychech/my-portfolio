import PersonalData from '../PersonalData'
import AboutMe from '../AboutMe'
import ExperienceNode from '../ExperienceNode'
import experience from './../../data/experience'
import sideProjects from '../../data/side-projects'
import ROCKET from './../../assets/rocket_launch.png'
import MEDAL from './../../assets/workspace_premium.png'

export default function MainContainer() {
  return (
    <div className="text-slate-100 min-h-dvh max-w-screen-xl m-auto flex flex-1 flex-row justify-between gap-4 lg:px-8 md:px-4">
      <header className="w-1/2 max-h-screen lg:py-12 lg:sticky lg:top-0">
        <PersonalData />
      </header>
      <main className="w-1/2 lg:py-12">
        <AboutMe />

        <div className="mb-7 font-semibold text-lg flex gap-3 items-center">
          <img src={ROCKET} className="animate-fly w-6 h-6" /> Professional experience
        </div>

        <div className="flex flex-col gap-16">
          {experience.map((company) => {
            return <ExperienceNode company={company} key={company.id} />
          })}
        </div>

        <div className="mt-24 mb-7 font-semibold text-lg flex gap-3 items-center">
          <img src={MEDAL} className="animate-side w-6 h-6" /> Side projects
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
