import { useState, useCallback } from 'react'
import { CompanyType } from '../../types'

export default function ExperienceNode({ company }: { company: CompanyType }) {
  const [hover, setHover] = useState(false)
  const [[x, y], setXY] = useState([0, 0])

  const handleOnMouseEnter = useCallback(() => setHover(true), [])
  const handleOnMouseLeave = useCallback(() => {
    setHover(false)
    setXY([0, 0])
  }, [])

  const handleOnMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const { currentTarget: target, clientX, clientY } = e
    const rect = target.getBoundingClientRect()

    setXY([
      ((clientY - rect.top) * 20) / rect.height - 10,
      ((clientX - rect.left) * -20) / rect.width + 10
    ])
  }, [])

  return (
    <div
      style={{
        transform: hover
          ? `scaleX(1.020) scaleY(1.020) perspective(2000px) rotateX(${x}deg) rotateY(${y}deg)`
          : 'scale(1) perspective(2000px) rotateX(0deg) rotateY(0deg)'
      }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onMouseMove={handleOnMouseMove}
      onClick={() => window.open(company.link)}
      className="px-2 py-3 grid grid-rows-1 grid-cols-[144px_auto] gap-4 rounded-xl cursor-pointer text-slate-400 ease-linear duration-200 hover:shadow-[0px_0px_30px_1px_rgba(96,35,131,0.3)]"
    >
      <div className="flex flex-col items-center gap-2">
        <div className="mt-2">
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
