import React from "react";
import logoOne from './assets/hero-banner-alt.jpg'
import logoTwo from './assets/hero-banner.jpg'
import MyButton from "./components/MyButton";
class HeroSection extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (

    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>

    </div>
    <div className="carousel-inner" >
        <div className="carousel-item active ">
        <img src={logoOne} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block" style={{color:"red"}}>
            <h5 >First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
            <MyButton name="show more" />
        </div>
        </div>
        <div className="carousel-item" style={{color:"red"}}>
        <img src={logoTwo} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block" style={{color:"red"}}>
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
            <MyButton name="show more"/>

        </div>
        </div>

    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
    </div>
        );
    }
}

export default HeroSection