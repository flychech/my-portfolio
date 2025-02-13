import { useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import ARROW from './../../assets/arrow_forward.svg'

export default function SectionItem({ section, scrollTo }: { section: string; scrollTo: string }) {
  const { t } = useTranslation('experience')
  const [sectionHover, setSectionHover] = useState(false)

  const handleOnClick = useCallback((scrollTo: string) => {
    const element = document.getElementById(scrollTo)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <div
      className="cursor-pointer flex items-center gap-2"
      onClick={() => handleOnClick(scrollTo)}
      onMouseEnter={() => setSectionHover(true)}
      onMouseLeave={() => setSectionHover(false)}
    >
      <div>{t(section)}</div>
      <img
        src={ARROW}
        className={`w-5 h-5 transition-all ${
          sectionHover ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-80'
        }`}
      />
    </div>
  )
}
