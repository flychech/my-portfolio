import './App.css'
import GradientDiv from './components/GradientDiv'
import MainContainer from './components/MainContainer'

function App() {
  return (
    <GradientDiv className={'bg-hazy-sky-900 w-screen max-w-full min-h-dvh'}>
      <MainContainer />
    </GradientDiv>
  )
}

export default App
