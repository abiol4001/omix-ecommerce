import { sliderData } from '@/data/sliderData';
import React, { ReactNode, useState } from 'react'
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import Slider from "react-slick"
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

type Settings = {
    className?: string;
    infinite?: boolean;
    centerPadding?: string;
    slidesToShow?: number;
    swipeToSlide?: boolean;
    nextArrow?: ReactNode,
    prevArrow?: ReactNode,
};

type Props = {
    handleFavorite?: () => void,
    isFavorite?: boolean
}



const SimpleSlider: React.FC<Props> = ({handleFavorite,isFavorite}) => {
    const settings: Settings = {
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
            <Slider {...settings}>
                {sliderData.map(item => (
                    <div className='relative rounded-xl max-w-[280px]'>
                        <div className='h-[400px] w-[280px]'>
                            <img src={item.image} alt={item.name} className="h-[100%] w-[100%]" />
                            <div className='rounded-[50%] bg-white absolute top-5 right-5 p-2 cursor-pointer' >
                                {isFavorite ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
                            </div>
                        </div>
                        <p className=' text-[15px] font-[300] mt-3'>{item.name}</p>
                        <p className=' text-[15px] font-[300] mt-1'>{item.price}</p>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default SimpleSlider