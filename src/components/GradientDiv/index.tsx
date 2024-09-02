import { ReactNode, useState, useEffect } from 'react'

type GradientDivProps = {
  children: ReactNode
  className: string
}

const GradientPosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  //const windowWidth = window.innerHeight

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateMousePosition = (ev: any) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
    }
  }, [])

  return mousePosition
}

const GradientDiv = ({ children, className }: GradientDivProps) => {
  return (
    <div
      style={{
        backgroundImage: `radial-gradient(circle at ${GradientPosition().x}px ${
          GradientPosition().y
        }px, rgba(96, 35, 131, 0.2), transparent 40%)`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

export default GradientDiv
