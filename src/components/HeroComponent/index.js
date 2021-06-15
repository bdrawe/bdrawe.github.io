import React from 'react'
import LazyHero from 'react-lazy-hero'
import HeroImage from '../../assets/images/hero-image.png'
import "./style.css"

class HeroComponent extends React.Component {
    render() {
        return (
            <div>
                <LazyHero
                    imageSrc={ HeroImage }
                    color = "black"
                    opacity = "0.4"
                    minHeight = "100vh"
                    parallxOffset = "75"
                >
                    <h1>Hello! My Name is Bryce.</h1>
                    <p>Front End Developer from Utah</p>
                </LazyHero>
            </div>
        )
    }
}
export default HeroComponent