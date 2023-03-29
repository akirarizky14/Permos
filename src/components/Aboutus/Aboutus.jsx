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
        <div className="bph-Aboutus">
          <div className="middle-bph">
            <h3>Badan Pengurus Harian</h3>
            <div className="container-ketua-permos">
              <div className="image-ketua-permos">
                <img src={people} alt="foto-ketua"/>
                <span>Ketua Permos</span>
              </div>
              <div className="visi-misi-ketua">
                <h3>Visi</h3>
                <span>Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua) Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)</span>
              <h3>Misi</h3>
                <span>Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow .ini diisi nanti sama kata kata ketua. Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow .ini diisi nanti sama kata kata ketua.</span>
              </div>
            </div>
            <div className="wsb-permos">
                <div className="wakil-permos">
                  <img src={people} alt="wakil" />
                  <span>Wakil Permos</span>
                </div>
                <div className="sekretaris-permos">
                  <img src={people} alt="wakil" />
                  <span>Sekretaris Permos</span>
                </div>
                <div className="bendahara-permos">
                  <img src={people} alt="wakil" />
                  <span>Bendahara Permos</span>
                </div>
              </div>
          </div>
        </div>
          <div className="department-permos">
            <div className="container-department">
              <div className="title-department-permos">
                <h1>Department Kemahasiswaan</h1>
              </div>
              <div className="bagan-department-permos">
                <div className="ketua-department">
                    <img src={people} alt="" />
                    <span>Ketua Department</span>
                </div>
                <div className="anggota-department">
                  <div className="anggota-dept">
                    <img src={people} alt="" />
                    <span>Michael Jordan</span>
                  </div>
                  <div className="anggota-dept">
                    <img src={people} alt="" />
                    <span>Michael Jordan</span>
                  </div>
                  <div className="anggota-dept">
                    <img src={people} alt="" />
                    <span>Michael Jordan</span>
                  </div>
                  <div className="anggota-dept">
                    <img src={people} alt="" />
                    <span>Michael Jordan</span>
                  </div>
                </div>
              </div>
              <div className="keterangan-department-permos">
                <h3>Ketua Department : Michael Jordan. </h3>
                <h3>Anggota Department : Michael Jordan. </h3>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Aboutus