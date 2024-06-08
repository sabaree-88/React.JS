import { useState } from 'react'
import DiceHome from './components/DiceHome'
import GameStart from './components/GameStart'

const App = () => {
  const [isGameStart, setIsGameStart] = useState(false)

  const toggle = () => {
    setIsGameStart((prev) => !prev);
  }
  return (
    <>
      {
        isGameStart ? <GameStart /> : <DiceHome toggle={toggle} />
      }

    </>
  )
}

export default App
