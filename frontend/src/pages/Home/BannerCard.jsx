import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './bannerCard.css';
   
// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
    return (
        <div className='banner'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerCard;