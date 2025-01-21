import TERRAMAR from './../assets/comapnies-logos/terramar-logo.png'
import REDCUBE from './../assets/comapnies-logos/redcube-logo.png'
import DGLLATAM from './../assets/comapnies-logos/dgl_latam_logo.jpeg'
import TELMEX from './../assets/comapnies-logos/logo-telmex.png'
import SERPA from './../assets/comapnies-logos/serpa-logo.png'
import DEEMBY from './../assets/comapnies-logos/deemby_logo.jpg'
import JUSTFUN1 from '../assets/videos-images/enter-sandman.png'
import JUSTFUN2 from '../assets/videos-images/detroit-rock-city.png'
import JUSTFUN3 from '../assets/videos-images/thunderstruck.png'
import JUSTFUN4 from '../assets/videos-images/pumpkin.png'
import JUSTFUN5 from '../assets/videos-images/led-strips.png'

import { useTranslation } from 'react-i18next'

import { CompanyType } from '../types'

const LOGO_IMAGES = {
  TMB: TERRAMAR,
  RED: REDCUBE,
  DGL: DGLLATAM,
  TEL: TELMEX,
  SPA: SERPA,
  DEE: DEEMBY,
  JF1: JUSTFUN1,
  JF2: JUSTFUN2,
  JF3: JUSTFUN3,
  JF4: JUSTFUN4,
  JF5: JUSTFUN5
}

export default function Experience(experienceList: string) {
  const { t } = useTranslation('experience')

  const professional = t<typeof experienceList, { returnObjects: true }, CompanyType[]>(
    experienceList,
    {
      returnObjects: true
    }
  ).map((v) => v)

  let professionalExperience: Array<CompanyType> = []

  if (professional instanceof Array) {
    professionalExperience = (professional ?? [])?.map((company: CompanyType) => {
      company.logo = LOGO_IMAGES[company.id as keyof typeof LOGO_IMAGES]
      return company
    })
  }

  return professionalExperience
}
