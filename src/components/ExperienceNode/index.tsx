type Company = {
  id: string
  logo: string
  company: string
  time: string
  jobPosition: string
  duties: Array<string>
  technologies: Array<string>
}

export default function ExperienceNode({ company }: { company: Company }) {
  return (
    <div className="grid grid-rows-1 grid-cols-[160px_auto] gap-4 text-slate-400">
      <div className="flex flex-col justify-center items-center gap-2">
        <div>
          <img src={company.logo} className="w-14 rounded" />
        </div>
        <div className="text-xs">{company.time}</div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="text-slate-100 text-xl font-semibold">{company.company}</div>
          <div className="text-hazy-sky-400 text-sm">{company.jobPosition}</div>
        </div>

        <div className="flex flex-col gap-2">
          {company.duties.map((duty) => {
            return <div key={duty}>{duty}</div>
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          {company.technologies.map((tech) => {
            return (
              <div
                className="py-1 px-3 bg-hazy-sky-700 text-sm rounded-full text-hazy-sky-200 opacity-85 border-b border-opacity-20 border-slate-100"
                key={tech}
              >
                {tech}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
