import { useState } from 'react'
import './App.css'

import NavBar from './NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar />
      
    </div>
  )
}

export default App
