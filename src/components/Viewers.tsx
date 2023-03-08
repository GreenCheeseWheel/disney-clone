import React from "react"
import styled from "styled-components"

export default function Viewers() 
{

    const mouseEnter = (event) => {
        let videoElement = event.target.querySelector("video")
        videoElement.play();
        videoElement.style = "opacity: 1;";
    }

    const mouseLeave = (event) => {
        let videoElement = event.target.querySelector("video")
        videoElement.pause();
        videoElement.style = "opacity: 0;";
    }

    return (
        <ViewerList>
            <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src="./images/brands/viewer/viewers-disney.png"></img>
                <video loop>
                    <source src="./videos/disney.mp4"></source>
                </video>
            </Wrapper>

            <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src="./images/brands/viewer/viewers-marvel.png"></img>
                <video>
                    <source src="./videos/marvel.mp4"></source>
                </video>
            </Wrapper>
            
            <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src="./images/brands/viewer/viewers-national.png"></img>
                <video>
                    <source src="./videos/national-geographic.mp4"></source>
                </video>
            </Wrapper>
            
            <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src="./images/brands/viewer/viewers-pixar.png"></img>
                <video>
                    <source src="./videos/pixar.mp4"></source>
                </video>
            </Wrapper>
            
            <Wrapper onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <img src="./images/brands/viewer/viewers-starwars.png"></img>
                <video>
                    <source src="./videos/star-wars.mp4"></source>
                </video>
            </Wrapper>
        </ViewerList>
    )

}

const ViewerList = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    width: 80%;
    margin: 5rem auto;


    img {
        width: 100%;
        pointer-events: none;   
    }


    video {
        position: absolute;
        height: 100%;
        right: 0;
        left: 0;
        bottom: 0;
        top: 0;
        pointer-events: none;
        border-radius: 5px;
        opacity: 0;
        transition: 600ms;
    }

`

const Wrapper = styled.div`
    width: 15%;
    height: min-content;
    position: relative;
    
    cursor: pointer;
    overflow: hidden;

    transition: 500ms;
    border-radius: 10px;
    border: 2px solid rgb(75, 75, 75);
    box-shadow: 3px 13px 15px rgb(10, 10, 10);

    &:hover {
        transform: scale(1.1);
    }

`