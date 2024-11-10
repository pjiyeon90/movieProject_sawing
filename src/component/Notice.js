//Notice.js
import React from 'react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/sawing.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const Notice = () => {
  return (
  <div className='swiperbox'>
    <Swiper
        direction={'vertical'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[ Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>[작업 공지] 9/16~9/17 추석 기간 SAWING 서비스 긴급 점검 (새벽 기간05:00~07:00)</SwiperSlide>
        <SwiperSlide>[점검 안내] 9월 19일 라이브 채널 점검</SwiperSlide>
        <SwiperSlide>[업데이트] 9월 2주 프로그램 리스트 공지</SwiperSlide>
        <SwiperSlide>[업데이트 중지] 9월 영화 리스트 확인</SwiperSlide>
      </Swiper>
  </div>
  )
}

export default Notice