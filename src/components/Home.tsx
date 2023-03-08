import React from "react"
import styled from "styled-components"
import HomeSliders from "./Movies"
import ImageSlider from "./ImageSlider"
import Viewers from "./Viewers"


export default function Home() {
    
    return (
        <Container>
            <BackgroundContainer></BackgroundContainer>
            <ImageSlider />
            <Viewers />
            <HomeSliders />
        </Container>
    )

}

const Container = styled.main`
    position: relative;
    width: 100%;
    min-height: 100vh;
`

const BackgroundContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("./images/home-background.png") center center / cover fixed;
    z-index: -1;
`
