import { useState } from 'react'
import './App.css'
import React from 'react'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import Main from './component/Main/Main'
import Orphelinat from './Pages/Orphelinat/Orphelinat'
import Contact from './Pages/Contact/Contact'

const App = () => {
  return (
    <div>
      {/* <Main /> */}
      {/* <Orphelinat /> */}
      <Contact />
    </div>
  )
}

export default App;