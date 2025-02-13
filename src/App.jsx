import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Red from './components/Red'
import Blue from './components/Blue'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
