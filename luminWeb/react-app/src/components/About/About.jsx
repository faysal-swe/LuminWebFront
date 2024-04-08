import React from 'react'
import AboutUsBanner from '../../AboutUsBanner/AboutUsBanner'
import AboutUsSection from '../../AboutUsSection/AboutUsSection'
import OurMisson from '../OurMission/OurMission'
import OurVison from '../OurVision/OurVision'
import AnimatedBanner from '../AnimatedBanner/AnimatedBanner'

function About() {
  return (
    <div>
      <AboutUsBanner/>
      <AboutUsSection/>
      <OurMisson/>
      <OurVison/>
      <AnimatedBanner/>
    </div>
  )
}

export default About