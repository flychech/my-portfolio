import { useState, useEffect } from 'react'
import './App.css'
import GradientDiv from './components/GradientDiv'
import MainContainer from './components/MainContainer'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count == 0) return
  }, [])
  return (
    <GradientDiv className={'bg-hazy-sky-900 w-screen max-w-full min-h-dvh'}>
      <MainContainer />
    </GradientDiv>
  )
}

export default App
