import React from 'react'
import '../Banner/Banner.css'

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner-text'>
        <h1 className='mb-4'>Lumen Corporation</h1>
        <p className='mb-4'>We ensure better services for better world.</p>
        <button className='btn-primary'>Explore more </button>
      </div>
    </div>
  )
}

export default Banner