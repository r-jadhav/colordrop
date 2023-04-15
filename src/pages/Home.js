import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
const Home = () => {

    const projects = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
        ]
      };

     const testimonial = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
          breakpoint: 1024,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
    ]
  };
  const owlOption = {
    loop: true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
}

  return (
    <div>
        
    <div className="page-wrapper">
{/*          
       <div className="preloader">
       <span></span>
     </div> */}

    <Header/>
    <Banner/>
      
     <section className="agency-section" id="about">
       {/* <div className="vector-layer" style="background-image: url(images/icons/vector-2.png)"></div> */}
       <div className="auto-container">
         <div className="row clearfix">
           
           <div className="image-column col-lg-6 col-md-12 col-sm-12">
             <div className="inner-column">
               {/* <div className="pattern-layer" style="background-image: url(images/background/pattern-1.png)"></div> */}
               {/* <div className="vector-layer-two" style="background-image: url(images/icons/vector-1.png)"></div> */}
               <div className="image wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                 <img src="images/resource/agency.jpg" alt="" />
               </div>
               <div className="digital-box">
                 <span className="icon flaticon-150-settings-1"></span>
                 <h5>Digital Assets</h5>
                 <div className="text">To create great content to understand the digital assets</div>
               </div>
             </div>
           </div>
           
           <div className="content-column col-lg-6 col-md-12 col-sm-12">
             <div className="inner-column">
               <div className="sec-title">
                 {/* <div className="title"> About Us </div> */}
                 <h2>About Us</h2>
               </div>
               <div className="service-box">
                 <div className="box-inner">
                   <div className="explore">
                     Explore <br/> 1000+
                     <span>Digital Services</span>
                   </div>
                   <ul className="list">
                     <li>A full-blown Digital Marketing Agency.</li>
                     <li>Committed to Brand you.</li>
                     <li>Here to Promote your Business.</li>
                   </ul>
                 </div>
               </div>
               <div className="sec-title">
                <div className="text">We manage this through our Digital Marketing Services in sync with the Current Market Trends.</div>
               </div>
               {/* <div className="lower-text">Digital agency the lorem have suffered alteration in some form, by injected humour have words</div> */}
               
             </div>
           </div>
           
         </div>
       </div>
     </section> 
     
       <section className="services-section">
       <div className="auto-container">
         
         <div className="sec-title">
           <div className="sec-title centered">
             <div>
               {/* <div className="title">Our agency</div> */}
               <h2>Why Digital?</h2>
             </div>
             {/* <a className="services" href="#">View All Services</a> */}

       <div class="inner-container">
				<div class="clearfix">
					
					<div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-204-compass"></div>
							<h4><a href="#">Infinite Reach</a></h4>
							<div class="text">Whole world is your playground.</div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>
					
          <div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-055-megaphone"></div>
							<h4><a href="#">Cost Effective</a></h4>
							<div class="text">Money saved is Money earned.</div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>
					
					<div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-205-diamond-1"></div>
							<h4><a href="#">Quantifiable </a></h4>
							<div class="text">Treasure what you can Measure.</div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>
					
				</div>
			</div>

      <div class="inner-container">
				<div class="clearfix">
					
					<div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-204-compass"></div>
							<h4><a href="#">Momentum Boost</a></h4>
							<div class="text"> Chain grows on its own.</div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>
					
               
					<div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-055-megaphone"></div>
							<h4><a href="#">Efficient</a></h4>
							<div class="text">One click, No worries.
              </div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>

          <div class="service-block col-lg-4 col-md-6 col-sm-12">
						<div class="inner-box">
							<div class="icon flaticon-204-compass"></div>
							<h4><a href="#">Momentum Boost</a></h4>
							<div class="text"> Chain grows on its own.</div>
							<a class="read-more theme-btn" href="#">Read More <span class="arrow flaticon-147-right-arrow-2"></span></a>
						</div>
					</div>
					
				</div>
			</div>

           </div>
         </div>
       </div>

      
     </section>
     
      {/* <section className="video-section">
       <div className="title">video</div>
       <div className="vector-layer" style="background-image: url(images/background/pattern-2.png)"></div>
       <div className="video-box">
         <figure className="video-image">
           <img src="images/background/1.jpg" alt=" "/>
         </figure>
         <a href="#" className="lightbox-image overlay-box"><span className="flaticon-009-play-arrow"><i className="ripple"></i></span></a>
       </div>
     </section> */}
     
     <section class="project-section-two" id="portfolio">
		<div class="vector-layer" style={{ backgroundImage: `url(images/background/pattern-10.png)`}} ></div>
		<div class="auto-container">
			
			<div class="sec-title">
				<div class="">
					<div className="sec-title centered">
						<h2>Social Media management</h2>
					</div>
				</div>
			</div>
		</div>
    <div class="inner-container">
				<div class="project-carousel owl-theme owl-stage-outer">
				

                <Slider {...projects}>

                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                        <div class="project-block">
                            <div class="inner-box">
                                <div class="image">
                                    <a href="#"><img src="images/gallery/1.jpg" alt="" /></a>
                                </div>
                                <div class="lower-content">
                                    <div class="d-flex justify-content-between align-items-center flex-wrap">
                                        <div class="content">
                                            <div class="title">Strategy</div>
                                            <h4><a href="#">Aamisha Foods</a></h4>
                                        </div>
                                        <div class="button-box">
                                            <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                      <div class="project-block">
                        <div class="inner-box">
                          <div class="image">
                            <a href="#"><img src="images/gallery/2.jpg" alt="" /></a>
                          </div>
                          <div class="lower-content">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                              <div class="content">
                                <div class="title">Strategy</div>
                                <h4><a href="#">Peppa Pork</a></h4>
                              </div>
                              <div class="button-box">
                                <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                      <div class="project-block">
                        <div class="inner-box">
                          <div class="image">
                            <a href="#"><img src="images/gallery/4.jpg" alt="" /></a>
                          </div>
                          <div class="lower-content">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                              <div class="content">
                                <div class="title">Strategy</div>
                                <h4><a href="#">The Backyard Cafe</a></h4>
                              </div>
                              <div class="button-box">
                                <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                      <div class="project-block">
                        <div class="inner-box">
                          <div class="image">
                            <a href="#"><img src="images/gallery/1.jpg" alt="" /></a>
                          </div>
                          <div class="lower-content">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                              <div class="content">
                                <div class="title">Strategy</div>
                                <h4><a href="#">Bungalow Makers</a></h4>
                              </div>
                              <div class="button-box">
                                <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                      <div class="project-block">
                        <div class="inner-box">
                          <div class="image">
                            <a href="#"><img src="images/gallery/2.jpg" alt="" /></a>
                          </div>
                          <div class="lower-content">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                              <div class="content">
                                <div class="title">Strategy</div>
                                <h4><a href="#">Dental Planet Multisolutions</a></h4>
                              </div>
                              <div class="button-box">
                                <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="owl-item" style={{width: "570px",marginRight: "30px"}}>
                      <div class="project-block">
                        <div class="inner-box">
                          <div class="image">
                            <a href="#"><img src="images/gallery/4.jpg" alt="" /></a>
                          </div>
                          <div class="lower-content">
                            <div class="d-flex justify-content-between align-items-center flex-wrap">
                              <div class="content">
                                <div class="title">Strategy</div>
                                <h4><a href="#">Sampoorna</a></h4>
                              </div>
                              <div class="button-box">
                                <a class="explore" href="#">explore <span class="arrow flaticon-147-right-arrow-2"></span></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>


				</Slider>

				</div>
			</div>
	</section>


    <section class="services-section-three" id="services">
		<div class="vector-layer" style={{ backgroundImage: `url(images/icons/vector-2.png)`}}></div>
		<div class="container">

			<div class="sec-title centered">
				{/* <div class="title">Our Services</div> */}
				<h2 class="text-white">Our Services</h2>
			</div>
			
			<div class="row clearfix">
					
				<div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Branding Solutions</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Graphic Designing</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Printing Solutions</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Paid Ads Campaign</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Google Business Listing</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Video Sales</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Business Consulting</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Social Media Page Handling</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Social Media Marketing</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				<div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Search Engine Optimization</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>

        <div class="service-block-three col-lg-3 col-md-6 col-sm-12">
					<div class="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div class="icon flaticon-204-compass"></div>
						<h4>Website & Mobile App Building</h4>
						<div class="text">Lorem ipsum dolor sit amet ipsum consectetur adipiscing elit sed</div>
						<div class="overlay-box" style={{ backgroundImage: `url(images/resource/service.jpg)`}}>
							<div class="overlay-inner">
								<div class="content">
									<a class="get-started" href="#">view all services <span class="arrow flaticon-right-arrow"></span></a>
								</div>
							</div>
						</div>
					</div>
				</div>
					
			</div>
			
		</div>
	  </section>


       {/* <section className="project-section">
       <div className="vector-layer" style="background-image: url(images/background/pattern-3.png)"></div>
       <div className="auto-container">
         
         <div className="sec-title centered">
           <div className="title">our Project</div>
           <h2>Digital marketing our company's <br/> internal history</h2>
         </div>
         
         <div className="d-flex flex-end justify-content-end">
           <a className="all-project" href="#">View All projects</a>
         </div>
         
         <div className="row clearfix">
           
           <div className="project-block col-lg-6 col-md-12 col-sm-12">
             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="projects-detail.html"><img src="images/gallery/1.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <div className="d-flex justify-content-between align-items-center flex-wrap">
                   <div className="content">
                     <div className="title">Strategy</div>
                     <h4><a href="projects-detail.html">Digital experience stategy <br/> Development</a></h4>
                   </div>
                   <div className="button-box">
                     <a className="explore" href="projects-detail.html">explore <span className="arrow flaticon-147-right-arrow-2"></span></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="project-block col-lg-6 col-md-12 col-sm-12">
             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="projects-detail.html"><img src="images/gallery/2.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <div className="d-flex justify-content-between align-items-center flex-wrap">
                   <div className="content">
                     <div className="title">Strategy</div>
                     <h4><a href="projects-detail.html">Digital experience stategy <br/> Development</a></h4>
                   </div>
                   <div className="button-box">
                     <a className="explore" href="projects-detail.html">explore <span className="arrow flaticon-147-right-arrow-2"></span></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="project-block col-lg-6 col-md-12 col-sm-12">
             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="projects-detail.html"><img src="images/gallery/3.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <div className="d-flex justify-content-between align-items-center flex-wrap">
                   <div className="content">
                     <div className="title">Strategy</div>
                     <h4><a href="projects-detail.html">Digital experience stategy <br/> Development</a></h4>
                   </div>
                   <div className="button-box">
                     <a className="explore" href="projects-detail.html">explore <span className="arrow flaticon-147-right-arrow-2"></span></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="project-block col-lg-6 col-md-12 col-sm-12">
             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="projects-detail.html"><img src="images/gallery/4.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <div className="d-flex justify-content-between align-items-center flex-wrap">
                   <div className="content">
                     <div className="title">Strategy</div>
                     <h4><a href="projects-detail.html">Digital experience stategy <br/> Development</a></h4>
                   </div>
                   <div className="button-box">
                     <a className="explore" href="projects-detail.html">explore <span className="arrow flaticon-147-right-arrow-2"></span></a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
           
         </div>
       </div>
     </section> */}
     
       <section className="testimonial-section">
       <div className="vector-layer" style={{backgroundImage:'images/background/pattern-4.png'}}></div>
       <div className="auto-container">
         
         <div className="sec-title centered py-4 mt-4">
           <h2>What People Say</h2>
         </div>
         <OwlCarousel className='three-item-carousel owl-carousel owl-theme' {...owlOption}
         >

<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote flaticon-045-right-quote"></div>
						<h3>Great agency</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>
				
				
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote style-two flaticon-045-right-quote"></div>
						<h3>Lovely services</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>
				
				
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote style-three flaticon-045-right-quote"></div>
						<h3>Very Good</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>
				
				
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote flaticon-045-right-quote"></div>
						<h3>Great agency</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>
				
			
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote style-two flaticon-045-right-quote"></div>
						<h3>Lovely services</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>
				
				
				<div class="testimonial-block">
					<div class="inner-box">
						<div class="quote style-three flaticon-045-right-quote"></div>
						<h3>Very Good</h3>
						<div class="text">“ We’ve developed expertise around the unique technology and experience challenges facing</div>
						<div class="author-box">
							<span class="image">
								<img src="images/resource/author-1.png" alt="" />
							</span>
							Troy Dean <i>UI Ux Designer</i>
						</div>
					</div>
				</div>


      </OwlCarousel>


       </div>
     </section>
     

        <section className="cta-section">
       {/* <div className="vector-layer" style="background-image: url(images/background/pattern-5.png)"></div> */}
       <div className="auto-container">
         <div className="icon flaticon-162-worldwide"></div>
         <h2>A long-term partnership with form <br/> and function</h2>
         <div className="text">How do you take high-end customer service</div>
         <div className="button-box text-center">
           <a href="about.html" className="theme-btn btn-style-three"><span className="txt">Start work with us</span></a>
         </div>
       </div>
     </section>
     
     <section class="services-section-two">
      <div class="sec-title centered">
        <h2>Social Media</h2>
      </div>
      <div class="vector-layer" style={{backgroundImage:'images/background/pattern-13.png'}}></div>

      <div class="auto-container">
        <div class="inner-container">
          <div class="row clearfix">
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-166-bulb"></span>
                  <h4><a href="#">Profile Creation And Management</a></h4>
                </div>
              </div>
            </div>
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-203-check-mark"></span>
                  <h4><a href="#">Sharing of Images, Content, Videos</a></h4>
                </div>
              </div>
            </div>
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-055-megaphone"></span>
                  <h4><a href="#">Facebook Marketing</a></h4>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div class="auto-container">
        <div class="inner-container">
          <div class="row clearfix">
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-166-bulb"></span>
                  <h4><a href="#">Twitter Marketing</a></h4>
                </div>
              </div>
            </div>
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-203-check-mark"></span>
                  <h4><a href="#">LinkedIn Marketing</a></h4>
                </div>
              </div>
            </div>
            
            <div class="service-block-two col-lg-4 col-md-6 col-sm-12">
              <div class="inner-box">
                <div class="content">
                  <span class="icon flaticon-055-megaphone"></span>
                  <h4><a href="#">Instagram Marketing </a></h4>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
	</section>

       <section className="challenge-section">
       <div className="auto-container">
         <div className="row clearfix">
           
           <div className="title-column col-lg-8 col-md-12 col-sm-12">
             <div className="inner-column">
               <div className="sec-title">
                 <div className="title">Our Challenge</div>
                 <h2>Our goal is to inspire and challenge to get the best result.</h2>
                 <div className="text">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</div>
               </div>
             </div>
           </div>
           
           <div className="image-column col-lg-4 col-md-12 col-sm-12">
             <div className="inner-column">
               <div className="image">
                 <img src="images/resource/challenge.png" alt="" />
               </div>
               <div className="button-box text-center">
                 <a href="#" className="theme-btn btn-style-one"><span className="txt">know about us</span></a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
     
       <section className="news-section">
       {/* <div className="vector-layer" style="background-image: url(images/background/pattern-6.png)"></div> */}
       <div className="auto-container">
         
         <div className="sec-title centered">
           <div className="title">Our Blog update</div>
           <h2>Recent Stories Updated</h2>
         </div>
         
         <div className="row clearfix">
           
           <div className="news-block col-lg-4 col-md-6 col-sm-12">
             <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="#"><img src="images/resource/news-1.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <ul className="post-meta">
                   <li><a href="#">15 Aug 2022</a></li>
                   <li><a href="#">Marketing</a></li>
                 </ul>
                 <h5><a href="#">Digital Privacy Changes And The Impact On Advertising</a></h5>
                 <div className="d-flex align-items-center">
                   <div className="author">
                     <div className="author-inner">
                       <div className="author-image">
                         <img src="images/resource/author-2.png" alt="" />
                       </div>
                       Anna
                     </div>
                   </div>
                   <a className="read-more theme-btn" href="#">Read More <span className="arrow flaticon-147-right-arrow-2"></span></a>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="news-block col-lg-4 col-md-6 col-sm-12">
             <div className="inner-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="#"><img src="images/resource/news-2.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <ul className="post-meta">
                   <li><a href="#">15 Aug 2022</a></li>
                   <li><a href="#">Marketing</a></li>
                 </ul>
                 <h5><a href="#">Digital Privacy Changes And The Impact On Advertising</a></h5>
                 <div className="d-flex align-items-center">
                   <div className="author">
                     <div className="author-inner">
                       <div className="author-image">
                         <img src="images/resource/author-2.png" alt="" />
                       </div>
                       Anna
                     </div>
                   </div>
                   <a className="read-more theme-btn" href="#">Read More <span className="arrow flaticon-147-right-arrow-2"></span></a>
                 </div>
               </div>
             </div>
           </div>
           
           <div className="news-block col-lg-4 col-md-6 col-sm-12">
             <div className="inner-box wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
               <div className="image">
                 <a href="#"><img src="images/resource/news-3.jpg" alt="" /></a>
               </div>
               <div className="lower-content">
                 <ul className="post-meta">
                   <li><a href="#">15 Aug 2022</a></li>
                   <li><a href="#">Marketing</a></li>
                 </ul>
                 <h5><a href="#">Digital Privacy Changes And The Impact On Advertising</a></h5>
                 <div className="d-flex align-items-center">
                   <div className="author">
                     <div className="author-inner">
                       <div className="author-image">
                         <img src="images/resource/author-2.png" alt="" />
                       </div>
                       Anna
                     </div>
                   </div>
                   <a className="read-more theme-btn" href="#">Read More <span className="arrow flaticon-147-right-arrow-2"></span></a>
                 </div>
               </div>
             </div>
           </div>
           
         </div>
         
       </div>
     </section>
     
      <section className="cta-section-two">
       <div className="auto-container">
         <div className="inner-container">
           {/* <div className="pattern-layer" style="background-image: url(images/background/pattern-7.png)"></div> */}
           <div className="row clearfix">
             <div className="title-column col-lg-6 col-md-12 col-sm-12">
               <div className="inner-column">
                 <div className="sec-title">
                   <div className="title">Lets Work Together</div>
                   <h2>Subsrcibe for our upcoming latest articles </h2>
                 </div>
               </div>
             </div>
             <div className="form-column col-lg-6 col-md-12 col-sm-12">
               <div className="inner-column">
                 <div className="subscribe-box">
                   <form method="post" action="https://jufailitech.com/envatoitems/GoAge/html/contact.html">
                     <div className="form-group">
                       <label>Email Address</label>
                       <input type="email" name="search-field" value="" placeholder="colordroponline@gmail.com" required />
                       <button type="submit" className="theme-btn btn-style-two">
                         <span className="txt">Subscribe</span>
                       </button>
                     </div>
                   </form>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>
    
  <Footer/>
     
     {/* <div className="search-popup">
       <div className="color-layer"></div>
       <button className="close-search"><span className="fa fa-arrow-up"></span></button>
       <form method="post" action="https://jufailitech.com/envatoitems/GoAge/html/blog.html">
         <div className="form-group">
           <input type="search" name="search-field" value="" placeholder="Search Here" required=""/>
           <button type="submit"><i className="fa fa-search"></i></button>
         </div>
       </form>
     </div> */}
    
     
    </div>
    </div>
  )
}

export default Home