import './App.css'
import React from 'react';
import Home from './Components/Home/Home';
import {Routes, Route} from 'react-router-dom'
import StarshipId from './Components/Details/StarshipId';


function App() {

 

  return (
    <>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/starships/:created' element={<StarshipId/>}/>
      </Routes>
      </div>
    </>
  )
}

export default App
