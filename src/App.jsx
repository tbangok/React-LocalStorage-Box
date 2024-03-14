import { useState, useEffect } from 'react'
import './App.css'
import { ColorBox } from './components/colorBox'
import { useLocalStorage } from './components/useLocalStorage' 

const randomNumber = () => {
  return Math.round(Math.random() * 100)
}

function App() {
  const [monBox, setMonBoxes] = useLocalStorage('monBoxes', []);
  const [tueBox, setTueBoxes] = useLocalStorage('tueBoxes', []);

 

  function handleMonday() {
    const name = randomNumber()
    setMonBoxes([...monBox, {
      name,
      color: `#AFE1AF`
    }])
  }

  function handleTuesday() {
    const name = randomNumber()
    setTueBoxes([...tueBox, {
      name,
      color: `#C9CC3F`
    }])
  }


  return (
    <>
      <h1>Monday</h1>
      <button onClick={handleMonday}>Add color box</button>
      <ColorBox allBox={monBox} />

      <h1>Tuesday</h1>
      <button onClick={handleTuesday}>Add color box</button>
      <ColorBox allBox={tueBox} />

    </>
  )
}

export default App
