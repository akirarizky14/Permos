import React from 'react'
import './RecentNews.css'
import foto1 from '../../../assets/1.jpg'
function RecentNews() {
  return (
    <div className="container-recentNews">
        <div className="top-RecentNews">
            <div className="box-RecentNews-name">
                <h1 className='RecentNews-name'>Recent News</h1>
            </div>
        </div>
        <div className="middle-RecentNews">
            <div className="container-middle-RecentNews">
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
        <div className="middle-RecentNews">
            <div className="container-middle-RecentNews">
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
        <div className="middle-RecentNews">
            <div className="container-middle-RecentNews">
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

export default RecentNews