import TERRAMAR from './../assets/comapnies-logos/terramar-logo.png'
import REDCUBE from './../assets/comapnies-logos/redcube-logo.png'
import DGLLATAM from './../assets/comapnies-logos/dgl_latam_logo.jpeg'
import TELMEX from './../assets/comapnies-logos/logo-telmex.png'

const experience = [
  {
    id: 'TMB',
    logo: TERRAMAR,
    company: 'Terramar Brands',
    time: '2012 - Present',
    jobPosition: 'Web and mobile React Native developer.',
    duties: [
      'I continuously improve the web and mobile app users experience by searching for new technologies.',
      'After the code was managed externally I implemented the management internally which reduced costs and allowed the brand to have full control of the design and the code.',
      'Not only I lead the México web and app projects I also developed and lead the USA eCommerce and mobile app.',
      'Propuse y desarrollé la aplicación móvil que se usa como herramienta para el evento “Viaje Internacional” de la empresa',
      'Migré la parte correspondiente al desarrollo web y API REST a los servicios de AWS (Anteriormente se trabajaba con servidor propio de la empresa).'
    ],
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React Native',
      'Next',
      'Vite',
      'AWS',
      'Kubernetes',
      'Docker'
    ],
    link: 'https://www.terramarbrands.com'
  },
  {
    id: 'RED',
    logo: REDCUBE,
    company: 'Redcube',
    time: 'Nov 2016 - Aug 2020',
    jobPosition: 'Fullstack developer.',
    duties: [
      'Desarrollé en equipo el eCommerce de Wilson Sports Mx con código propio y también contribuí en la creación de un producto en el cual cualquier persona sin conocimientos de programación podía generar su propio eCommerce personalizado.'
    ],
    technologies: ['Javascript', 'React', 'React Native', 'Google Cloud'],
    link: 'https://www.facebook.com/redcube.io'
  },
  {
    id: 'DGL',
    logo: DGLLATAM,
    company: 'DGL Latam',
    time: 'Mar 2014 - Nov 2016',
    jobPosition: 'Fullstack developer.',
    duties: [
      'Desarrollé el eCommerce con la plataforma Magento.',
      'Desarrollé el backoffice administrativo conectado a la API REST de Walmart para comunicar temas de distribución de mercancía entre empresas.'
    ],
    technologies: ['Javascript', 'React', 'PHP'],
    link: 'https://dgllatam.com/'
  },
  {
    id: 'TEL',
    logo: TELMEX,
    company: 'Telmex',
    time: 'Oct 2012 - Apr 2013',
    jobPosition: 'Fullstack developer.',
    duties: [
      'Llevé a cabo el mantenimiento de backend y front-end de acuerdo a los requerimientos administrativos.'
    ],
    technologies: ['Javascript', 'React', 'PHP'],
    link: 'https://telmex.com/'
  }
]

export default experience
