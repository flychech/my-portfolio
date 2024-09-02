import { useState } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef
} from '@react-spring/web'

import data from './data'
import styles from './styles.module.css'

import AVATAR from '../../assets/chech-avatar-1.png'

export default function PersonalData() {
  const [open, setOpen] = useState(false)

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
      background: 'hotpink',
      borderRadius: 999
    },
    enter: {
      borderRadius: 48
    },
    config: config.default
  }))

  const onAvatarClick = (isOpen: boolean) => ({
    width: isOpen ? '350%' : '100%',
    background: isOpen ? 'white' : 'hotpink',
    borderRadius: isOpen ? 16 : 999
  })

  // const springApi = useSpringRef()
  // const { size, ...rest } = useSpring({
  //   ref: springApi,
  //   config: config.stiff,
  //   from: {
  //     size: '20%',
  //     background: 'hotpink',
  //     position: 'relative'
  //   },
  //   to: {
  //     size: open ? '100%' : '20%',
  //     background: open ? 'white' : 'hotpink',
  //     position: open ? 'absolute' : 'relative',
  //     top: open ? 0 : 0,
  //     left: open ? 0 : 0
  //   }
  // })

  const transApi = useSpringRef()
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 }
  })

  // useChain(open ? [springApi, transApi] : [transApi, springApi], [0, open ? 0.1 : 0.6])

  return (
    <>
      <div className="flex items-center gap-4">
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
            className="absolute top-0 left-0 bg-hazy-sky-200 min-w-full min-h-full flex justify-center items-center overflow-hidden"
            onClick={() => {
              set(updateHover(false))
              setOpen((open) => {
                avatarContainerSet(onAvatarClick(!open))
                return !open
              })
            }}
          >
            <img src={AVATAR} alt="chech-avatar" className="w-full" />
            {/* {transition((style, item) => (
              <animated.div className={styles.item} style={{ ...style, background: item.css }} />
            ))} */}
          </animated.div>
        </animated.div>

        <div className="flex-1">
          <h1 className="font-dmsans font-semibold text-5xl">Sergio Álvarez Mendizábal</h1>
          <div className="text-xl mt-2">Fullstack and mobile developer</div>
        </div>
      </div>
    </>
  )
}
