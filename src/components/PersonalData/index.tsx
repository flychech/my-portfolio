import { useState } from 'react'
import { useSpring, config, animated } from '@react-spring/web'
import { useTranslation } from 'react-i18next'

import AVATAR from '../../assets/chech-avatar-1.png'
import MYPHOTO from '../../assets/my-photo.jpeg'
import CALLMADE from '../../assets/call_made.png'

export default function PersonalData() {
  const { t } = useTranslation('experience')
  const [open, setOpen] = useState(false)
  const [cvhover, setCvhover] = useState(false)

  const [props, set] = useSpring(() => ({
    transform: 'scale(1)',
    from: {
      transform: 'scale(1)'
    },
    config: { tension: 400, mass: 2, velocity: 5 }
  }))

  const updateHover = (hovering: boolean) => ({
    transform: `scale(${hovering ? 1.1 : 1})`
  })

  const [avatarContainerProps, avatarContainerSet] = useSpring(() => ({
    width: '100%',
    from: {
      width: '100%',
      background: '',
      borderRadius: 999
    },
    enter: {
      borderRadius: 48
    },
    config: config.default
  }))

  const onAvatarClick = (isOpen: boolean) => ({
    width: isOpen ? '350%' : '100%',
    background: isOpen ? 'white' : '',
    borderRadius: isOpen ? 16 : 999
  })

  return (
    <>
      <div className="flex items-center gap-x-6">
        <animated.div
          className="min-w-28 min-h-28 max-w-28 max-h-28 relative"
          style={props}
          onMouseEnter={() => {
            if (!open) set(updateHover(true))
          }}
          onMouseLeave={() => {
            if (!open) set(updateHover(false))
          }}
        >
          <animated.div
            style={avatarContainerProps}
            className="absolute top-0 left-0 bg-hazy-sky-200 min-w-full min-h-full flex justify-center items-center overflow-hidden cursor-pointer"
            onClick={() => {
              set(updateHover(false))
              setOpen((open) => {
                avatarContainerSet(onAvatarClick(!open))
                return !open
              })
            }}
          >
            {open ? (
              <img src={MYPHOTO} alt="Sergio Alvarez photo" className="w-full" />
            ) : (
              <img src={AVATAR} alt="chech-avatar" className="w-full" />
            )}
          </animated.div>
        </animated.div>

        <div className="flex-1">
          <h1 className="font-dmsans font-semibold text-5xl">Sergio Álvarez Mendizábal</h1>
          <div className="text-xl mt-2 text-hazy-sky-400">{t('myProfesion')}</div>
          <div
            className="flex gap-1 items-center"
            onMouseEnter={() => setCvhover(true)}
            onMouseLeave={() => setCvhover(false)}
          >
            <div className="cursor-pointer">{t('downloadcv')}</div>
            <img
              src={CALLMADE}
              className={`w-5 h-5 transition-all ${
                cvhover
                  ? '-translate-y-0.5 translate-x-0.5 opacity-100'
                  : 'translate-y-0 translate-x-0 opacity-80'
              }`}
            />
          </div>
        </div>
      </div>
    </>
  )
}
