"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
   
    {
        profession: 'Fundador',
        name: 'Manuel Toro',
        imgSrc: '/images/wework/bubududu-work.gif',
    },
        
   
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const isSingleSlide = postData.length === 1;

        const settings = {
            dots: false,
            infinite: !isSingleSlide,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: !isSingleSlide,
            speed: 4000,
            autoplaySpeed: 2000,
            cssEase: "linear",
        };

        return (
            <div className="bg-wework py-32">
                <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-6xl font-bold text-black my-2">Trabajamos en varios sectores.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-50 lg:mr-48 my-2">Trabajamos en varios sectores.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black opacity-25 lg:-mr-32 my-2">Trabajamos en varios sectores.</h3>
                    </div>
                </div>

                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='bg-white m-3 py-14 my-10 text-center text-center shadow-xl w-1/2 mx-auto'>
                                <div className='relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={182} height={182} className="inline-block m-auto" />
                                    <Image src={'/images/wework/linkedin.svg'} alt="linkedin" width={120} height={120} className="absolute inline-block position-linkedin" />
                                </div>
                                <h4 className='text-4xl font-bold pt-14'>{items.name}</h4>
                                <h3 className='text-2xl font-normal pt-4 pb-2 opacity-50'>{items.profession}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}