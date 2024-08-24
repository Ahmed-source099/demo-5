import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Youtube from './youtube'

function App() {

const username = "Ahmad"
  return (
    <>
     <h1>Vite react app {2+2} </h1>
     <h1>Vite react app {username} </h1>
     <Youtube/>
    </>
    
  )
}

export default App
