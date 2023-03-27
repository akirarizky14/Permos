import React from 'react';
import './Gallery.css'
import images from '../../assets/msk3.jpg'

 function Gallery(){
    return (

        <div>
    <h1 className='gallery'>
        <button className='btn-gallery'>Gallery</button>
        </h1>

        <div className='content'>
        <div className='container-img-gallery'>
        <p className='title-kegiatan'>KEGIATAN B</p>
        <img src={images} alt='/' className='img-gallery' />
        </div>

        <br/>
        <br/>

        <div className='container-img-gallery'>
        <p className='title-kegiatan'>KEGIATAN B</p>
        <img src={images} alt='/' className='img-gallery'/>
        </div>
        </div>

        </div>

    );
};

export default Gallery