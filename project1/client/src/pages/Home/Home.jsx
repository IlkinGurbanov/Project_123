import React from 'react'
import Beforefooter from '../../components/Beforefooter/Beforefooter'
import Box from '../../components/Box/Box'
import Header from '../../components/Header/Header'
import './Home.css'

function Home() {
  return (
    <div className="home">
        <Header/>
        <Box/>
        <Beforefooter/>
    </div>
  )
}

export default Home