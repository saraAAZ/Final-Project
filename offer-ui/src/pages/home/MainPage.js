import React from 'react'

import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Slider from '../../components/imageslider/ImageSlider.jsx'
export default function Home() {
    return (
        <div>
            <Header/>
            <Slider/>
            <Footer/>
        </div>
    )
}
