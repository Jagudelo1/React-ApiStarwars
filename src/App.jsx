import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import { HomeApp } from './components/HomeApp';
import { Personajes } from './components/Personajes/Personajes';
import { Planetas } from './components/Planetas/Planetas';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomeApp/>}/>
        <Route exact path='/Personajes' element={<Personajes/>}/>
        <Route exact path='/Planetas' element={<Planetas/>}/>
      </Routes>
    </>
  )
}

export default App
