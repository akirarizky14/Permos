import React from 'react'
import './News.css'
import foto1 from '../../assets/1.jpg'
function News() {
  return (
    <div className="container-News">
        <div className="top-News">
            <div className="box-News-name">
                <h1 className='News-name'>News</h1>
            </div>
        </div>
        <div className="middle-News">
            <div className="container-middle-News">
              <img src={foto1} alt="foto1" />
              <div className="container-isi-recent-news">
                <div className="news">
                  <div className="box-news">
                    News
                  </div>
                </div>
                <caption className='capt-recent-news'>
                  Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)
                </caption>
              </div>
            </div>
        </div>
        <div className="middle-News">
            <div className="container-middle-News">
              <img src={foto1} alt="foto1" />
              <div className="container-isi-recent-news">
                <div className="news">
                  <div className="box-news">
                    News
                  </div>
                </div>
                <caption className='capt-recent-news'>
                  Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)
                </caption>
              </div>
            </div>
        </div>
        <div className="middle-News">
            <div className="container-middle-News">
              <img src={foto1} alt="foto1" />
              <div className="container-isi-recent-news">
                <div className="news">
                  <div className="box-news">
                    News
                  </div>
                </div>
                <caption className='capt-recent-news'>
                  Permos atau Permira cabang Moskow adalah organisasi mahasiswa Indonesia yang sedang menjenjang pendidikannya di kota Moskow (ini diisi nanti sama kata kata ketua)
                </caption>
              </div>
            </div>
        </div>
    </div>
  )
}

export default News