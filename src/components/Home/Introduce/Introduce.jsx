import React from 'react'
import './Introduce.css'
import people from '../../../assets/people.jpg'
function Introduce() {
  return (
    <div className="container-introduce">
        <div className="top-introduce">
            <div className="box-introduce-name">
                <h1 className='introduce-name'>Ketua Permos 2023</h1>
            </div>
        </div>
        <div className="middle-introduce">
            <div className="visi">
                <h3>Visi</h3>
                <caption className='capt'>Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)</caption>
            </div>
            <div className="profile">
                <img src={people} alt="" />
                <div className="box-introduce-name">
                    <h1 className='introduce-name'>Nur Tahyudin</h1>
                </div>
            </div>
            <div className="visi">
                <h3>Visi</h3>
                <caption className='capt'>Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)</caption>
            </div>
        </div>
    </div>
  )
}

export default Introduce