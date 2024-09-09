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
    jobPosition: 'Web and mobile developer.',
    duties: [
      "I continuously improve the web and mobile app user's experience by searching for new technologies.",
      'After the mobile app code was managed externally I implemented the management internally which reduced costs and allowed the brand to have full control of the design and the code.',
      'Not only I led the México web and app projects, I also developed and led the USA eCommerce and mobile app. I also developed the mobile application used for international trips.',
      'I continuously migrate all my API REST and web development work to AWS from the company servers.'
    ],
    technologies: [
      'Javascript',
      'Typescript',
      'React',
      'React Native',
      'Next',
      'Vite',
      'Vue',
      'Tailwind',
      'AWS',
      'Kubernetes',
      'Docker',
      'Firebase'
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
      'I developed with my team the Wilson Sports Mx eCommerce with our own code. I also contributed to the creation of a tool that any person without programming skills could create their own personalized eCommerce.'
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
      'With the Magento platform I developed the eCommerce web page.',
      'I connected the Walmart API REST with our admin backoffice for supply chain communication purposes.'
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
      'I managed the backend and front-end maintenance according to administrative requests.'
    ],
    technologies: ['Javascript', 'JQuery', 'React', 'PHP', 'Codeigniter'],
    link: 'https://telmex.com/'
  }
]

export default experience
