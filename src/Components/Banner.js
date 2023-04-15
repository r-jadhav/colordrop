import React,{Component} from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import background from "../assets/images/main-slider/image-1.jpg"
import patternOne from "../assets/images/main-slider/icons-layer.png"
import shadow from "../assets/images/main-slider/shadow-layer-1.png"

// import './owl.css';  
export class Banner extends Component {  
        render()  
        {  
          return (  
            <>  
        

        <section class="main-slider">
        <div class="pattern-one" style={{ backgroundImage: `url(${patternOne})`}}></div>

        <div class="main-slider-carousel">

        <OwlCarousel items={1}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  


           <div class="main-slider-carousel owl-theme">
            <div class="slide">

                    <div class="auto-container">
                    <div class="row clearfix">
                    
                        <div class="content-column col-xl-9 col-lg-8 col-md-12 col-sm-12">
                        <div class="inner-column">

                            <div class="shadow-layer" style={{ backgroundImage: `url(${shadow})`}}></div>
                            <h1 className='bannerHead'> A Digital Marketing Company </h1>
                            {/* <div class="text">sfdf</div> */}
                            <div class="buttons-box d-flex align-items-center flex-wrap">
                            <a href="#" class="theme-btn btn-style-one"><span class="txt">Find Solution</span></a>
                            <div class="idea text-white">
                                <span class="icon"><img src="images/icons/bulb.png" alt="" /></span>
                                Ideas are important. Without ideas, <br/> progress isn’t made
                            </div>
                            </div>
                            <div class="phone">Dedicated to Solutions <a href="tel:07314266699">0731 - 4266699</a></div>
                        </div>
                        </div>
                        
                        <div class="image-column col-xl-3 col-lg-4 col-md-12 col-sm-12">
                        <div class="inner-column">
                            {/* <div class="shadow-layer-two" style={{ backgroundImage: `url(${background})`}}></div> */}
                            <div class="border-one"></div>
                            <div class="border-two"></div>
                            <div class="image">
                            <img src="images/main-slider/image-1.jpg" alt="" />
                            <span class="icon-one flaticon-206-rocket-1"></span>
                            <span class="icon-two flaticon-153-document"></span>
                            <div class="request-box">
                                <div class="box-inner">
                                <span class="icon">
                                    <img src="images/main-slider/copy.png" alt="" />
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

      </OwlCarousel>  


</div>
</section>



  
      </>  
          )  
        }  
      }  
        
  
export default Banner  