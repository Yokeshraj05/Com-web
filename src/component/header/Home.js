import React from 'react'
import HomePage from './index'
import AboutUs from './AboutUs'
import Services from './Service'
import Projects from './Projects'
import BlogPage from './Blog'
import OurTeam from './OurTeam'
import Testimonial from './Testimonial'
import GetInTouch from './GetInTouch'

function Home() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <Services />
      <Projects />
      <BlogPage />
      <OurTeam />
      <Testimonial />
      <GetInTouch />
    </div>
  )
}

export default Home