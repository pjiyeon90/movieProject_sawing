//Swiper.js
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { getDetail } from '../api/api';

const Swiper1 = ({title, data, type}) => {
  let [list,setList] = useState([]);

  async function detail(e){
    let t = e.target
    let res = await getDetail(`${type}/${t.id}`)
    console.log(res.data)
  }

  function dataGet(){
    let original = 'https://image.tmdb.org/t/p/original';
    
    setList( data.map((obj)=>
      <SwiperSlide key={obj.id}>
          <div className='wrapimg' >
          <div className="text" data-swiper-parallax="-100">
            <h3>{obj.title}</h3>
            <p>
            {obj.overview}
            </p>
          </div>
          <img src={original + obj.backdrop_path} id={obj.id} data-swiper-parallax="-1000"/>
          </div>
       </SwiperSlide>
      )
    )
  }
 useEffect(()=>{
    dataGet();    
  },[data])


  return (
    <div>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        speed={600}
        slidesPerView={1}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
      {list}
      </Swiper>
    </div>
  )
}

export default Swiper1