import React, { Component } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../css/image_slider.css"

export default function ImageSlider()
{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <Carousel {...settings}>
            <div>
                <img src="./images/brands/slider/slider-badag.jpg" className="carousel--img"></img>
            </div>
            <div>
                <img src="./images/brands/slider/slider-badging.jpg" className="carousel--img"></img>
            </div>
            <div>
                <img src="./images/brands/slider/slider-scale.jpg" className="carousel--img"></img>
            </div>
            <div>
                <img src="./images/brands/slider/slider-scales.jpg" className="carousel--img"></img>
            </div>
        </Carousel>
    )
}

const Carousel = styled(Slider)`
    width: 60%;
    height: fit-content;
    margin: auto;
    text-align: center;
    


    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: white;
    }

    .slick-list {
        overflow: visible;
    }

    button {
        z-index: 1;
    }
`