import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'

import GradientDiv from './components/GradientDiv'
import MainContainer from './components/MainContainer'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <GradientDiv className={'bg-hazy-sky-900 w-screen max-w-full min-h-dvh'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-portfolio" element={<MainContainer />} />
        </Routes>
      </GradientDiv>
    </BrowserRouter>
  )
}

export default App
