import React from 'react'
import Header from './components/Header'
import Categorias from './components/Categorias'
import WrapInfo from './components/WrapInfo'
import Donde from './components/Donde'
import SobreNosotros from './components/SobreNosotros'

function App() {
  return (
    <>
      <Header/>
      <SobreNosotros/>
      <WrapInfo/>
      <Categorias/>
      <Donde/>
    </>
  )
};

export default App