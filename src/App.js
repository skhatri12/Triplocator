import React from 'react'
import Navbar from './Components/Navbar.js'
import Secondnavbar from './Components/Secondnavbar.js'
import { BrowserRouter } from 'react-router-dom'
import Banner from './Components/Banner.js'
import Belowbanner from './Components/Belowbanner.js'
import Destination from './Components/Destination.js'
import Tours from './Components/Tours.js'
import Attraction from './Components/Attraction.js'
import Thirdnavbar from './Components/Thirdnavbar.js'
import BodyFooter from './Components/Footer/BodyFooter.js'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <Secondnavbar />
      <Banner />
      <Belowbanner />
      <Destination />
      <Tours />
      <Attraction />
      <BrowserRouter>
        <Thirdnavbar />
      </BrowserRouter>
      <BodyFooter />
    </>
  )
}

export default App
