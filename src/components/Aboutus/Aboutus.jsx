import React from 'react'
import './Aboutus.css'
import people from '../../assets/people.jpg'
function Aboutus() {
  return (
    <div className="container-Aboutus">
        <div className="top-Aboutus">
            <div className="box-Aboutus-name">
                <h1 className='Aboutus-name'>About us</h1>
            </div>
        </div>
        <div className="middle-Aboutus">
          <div className="middle-bph">
            <h3>Badan Pengurus Harian</h3>
            <div className="aboutus-visi-misi">
              <div className="img-ketua">
                <img className='foto-ketua' src={people} alt="" />
                <caption>Ketua Permos</caption>
              </div>
              <div className="visi-misi-ketua">
                  <h3>Visi</h3>
              </div>
            </div>
          </div>
          <div className="wsb-bph">
            <div className="foto-wsb">
                <img src={people} alt="" />
            </div>
            <div className="foto-wsb">
                <img src={people} alt="" />
            </div>
            <div className="foto-wsb">
                <img src={people} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutus