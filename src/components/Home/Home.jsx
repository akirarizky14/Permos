import React from 'react'
import CSlider from './CSlider/CSlider'
import './Home.css'
import Introduce from './Introduce/Introduce'
import RecentNews from './RecentNews/RecentNews'
function Home() {
  return (
    <div className="container">
      <CSlider/>
      <Introduce/>
      <RecentNews/>
    </div>
  )
}

export default Home