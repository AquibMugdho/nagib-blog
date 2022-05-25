import React from 'react'
import nagibImage from './img/nagib.png'


function Home() {
  return (
    <><div class="header-content">
    <div class="left-header">
      <div class="h-shape"></div>
      <div class="image">
        <img src={nagibImage} alt="" />
      </div>
    </div>
    <div class=" right-header">
      <h1 class="name">
        Welcome <span>Friend,</span>
         &nbsp; To my right hemisphere.
      </h1>
      <p>
        Lorem ipsum
      </p>

    </div>
  </div></>
  )
}

export default Home