import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import ListMovies from './components/ListMovies'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/movies' element={<ListMovies/>}/>
        <Route path='/detail' element={<ListMovies/>}/>
      </Routes>
    </Router>
  )
}

export default App