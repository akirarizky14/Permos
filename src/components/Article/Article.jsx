import React from 'react';
import '../../App.css';
import './Article.css';
 function Article(){
    return (

        <div className='berita'>
            <p className='title-berita'>
            HOT NEWS!!! PUTIN DUKUNG JOKOWI NAIK UNTUK PERIODE KE 3
                </p>

                <br/>
                <div className='img-berita'>
                <img src='images/msk3.jpg' className='img' alt='/'/>
                <p className='info-berita'>Tuesday 7 March 2023 19.30 by Dani Fatsey</p>
                </div>
                
                <br/><br/><br/>
                <p className='text-berita'>
                DILANSUR DARI TRIBUN MOSKOW, PRESIDEN NEGARA TERBESAR DI DUNIA INI 
                (PRESIDEN PUTIN) MENGEMUKAKAN DUKUNGAN SECARA TERBUKA UNTUK JOKOWI 
                AGAR MENCALONKAN DIRI UNTUK PERIODE SELANJUTNYA. PRESIDEN PUTIN 
                MENGATAKAN BAHWA JOKOWI ADALAH SOSOK YANG BIJAK DAN OPTIMIS. HAL INI 
                TENTUNYA BERDAMPAK BAIK BAGI INDONESIA DEMI CITA CITA BANGSA DAN 
                TUJUAN INDONESIA 2045. PUTIN JUGA MENAMBAHKAN BAHWA DIA 
                MENGINGINKAN KERJA SAMA INDONESIA AGAR SEMAKIN ERAT JIKA JOKOWI NAIK 
                LAGI KE PERIODE SELANJUTNYA.
                </p>

        </div>

        ) 
    };
    

    export default Article