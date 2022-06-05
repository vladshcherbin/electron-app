import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
)

export default App
