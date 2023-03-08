import { sliderData } from '@/data/sliderData';
import React, {useState} from 'react'
import Slider from "react-slick"
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

type Settings = {
    className: string;
    infinite: boolean;
    centerPadding: string;
    slidesToShow: number;
    swipeToSlide: boolean;
    afterChange: (index: number) => void;
};

const SimpleSlider = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        swipeToSlide: true,
        nextArrow: <PrevArrow />,
        prevArrow: <NextArrow />
    }
  return (
      <div>
          <h2>Swipe To Slide</h2>
          <Slider {...settings}>
              {sliderData.map(item => (
                  <div>
                      <img src={item.image} alt={item.name} className="h-[350px]" />
                      <p className='text-center text-[15px] font-[300] mt-4'>{item.name}</p>
                  </div>
              ))}
          </Slider>
      </div>
  )
}

export default SimpleSlider