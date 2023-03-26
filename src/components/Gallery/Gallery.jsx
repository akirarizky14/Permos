import React from 'react'
import './Gallery.css'
import msk2 from '../../assets/msk2.jpg'
import msk3 from '../../assets/msk3.jpg'

function Gallery() {
  return (
    <div>
      <button>Gallery</button>

    <p>KEGIATAN A</p>
    <img src={msk2} alt='/' className='img-gallery1'/>
    <p>KEGIATAN B</p>
    <img src={msk3} alt='/' className='img-gallery2'/>      
    </div>
  )
}

export default Gallery
