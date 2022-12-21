import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper';

import "swiper/css";

import "./Rasmlar.css";

function Rasmlar() {
  return (
    <div className='rasmlar'>
        <Swiper 
                 watchSlidesProgress={true} slidesPerView={6}
                className="mySwiper"
                modules={[Autoplay,Pagination]}
                loop={true}
                autoplay={true}
                spaceBetween={2}

        >
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp"} alt={"https://assets.asaxiy.uz/brand/webp//6014fbfea491a.webp"} /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//600bc3fa84df8.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//5e15c615d99f8.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//5e15c5de44b63.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//6014ffc121fc1.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//5e15c51449bd0.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//605036814c07e.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg"} alt="" /></SwiperSlide>
            <SwiperSlide><img src={"https://assets.asaxiy.uz/brand/webp//5e15c561deadb.webp"} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Rasmlar