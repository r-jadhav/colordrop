import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../assets/css/style.css'
import background from "../assets/images/main-slider/image-1.jpg"
import patternOne from "../assets/images/main-slider/icons-layer.png"
import shadow from "../assets/images/main-slider/shadow-layer-1.png"



function BannerCopy() {

     
const slides = [
    { title: 'A DIGITAL MARKETING COMPANY', description: 'Agency work with top rated talented people provide qulaity services.'},
    { title: 'We create experiences and growth', description: 'Agency work with top rated talented people provide qulaity services.'},
  ];


  return (
    <>
    <section class="main-slider">
        <div class="pattern-one" style={{ backgroundImage: `url(${patternOne})`}}></div>
        <div class="main-slider-carousel">

        <Slider>
            {slides.map((slide, index) => <div key={index}>

            
        <div class="main-slider-carousel owl-theme">
            <div class="slide">
                    <div class="auto-container">
                    <div class="row clearfix">
                    
                        <div class="content-column col-xl-9 col-lg-8 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="shadow-layer" style={{ backgroundImage: `url(${shadow})`}}></div>
                            <h1>{slide.title}</h1>
                            <div class="text">{slide.description}</div>
                            <div class="buttons-box d-flex align-items-center flex-wrap">
                            <a href="about.html" class="theme-btn btn-style-two"><span class="txt">Find Solution</span></a>
                            <div class="idea">
                                <span class="icon"><img src="../assets/images/icons/bulb.png" alt="" /></span>
                                Ideas are important. Without ideas, <br/> progress isn’t made
                            </div>
                            </div>
                            <div class="phone">Dedicated to Solutions <a href="tel:+012-345-678-99">+012 (345) 678 99</a></div>
                        </div>
                        </div>
                        
                        <div class="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="shadow-layer-two" style={{ backgroundImage: `url(${background})`}}></div>
                            <div class="border-one"></div>
                            <div class="border-two"></div>
                            <div class="image">
                            <img src="../assets/images/main-slider/image-1.jpg" alt="" />
                            <span class="icon-one flaticon-206-rocket-1"></span>
                            <span class="icon-two flaticon-153-document"></span>
                            <div class="request-box">
                                <div class="box-inner">
                                <span class="icon">
                                    <img src="../assets/images/main-slider/copy.png" alt="" />
                                </span>
                                Take a step in the <br/> right direction
                                <a href="contact.html">Request a call</a>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
                </div>

            </div>
     


            )}
            </Slider>
</div>
        </section>
</>
  )
}

export default BannerCopy