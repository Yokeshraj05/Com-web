import React from 'react'
import HomePage from '../component/header'
import AboutUs from '../component/header/AboutUs'
import Services from '../component/header/Service'
import Card from '../component/header/Card'
import Projects from '../component/header/Projects'



function Dashboard() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <Services />
      <Projects />
    </div>
  )
}

export default Dashboard