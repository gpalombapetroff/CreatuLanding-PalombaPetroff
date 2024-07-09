
import React from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Button from './components/Button'

function App () {
  return (
    <>
      <NavBar  />
      <ItemListContainer className="item" greeting="hola"/>
      <Button />
    </>
  )
}


export default App