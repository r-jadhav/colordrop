import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const Header = () => {

  const [navbarOpen, setNavbarOpen] = useState(false)
	// const handleToggle = () => {
	// 	setNavbarOpen(prev => !prev)
	//   }

	  const handleToggle = () => {
		setNavbarOpen(!navbarOpen)
	  }

	  const closeMenu = () => {
		setNavbarOpen(false)
	  }

  return (
    <div>

<header class="main-header">
         
         <div class="header-lower">
             
       <div class="auto-container">
         <div class="inner-container d-flex justify-content-between align-items-center">
           
           <div class="logo-box">
             <div class="logo"><a href="#"><img src="images/logo/CDlogo.png" width="250" /></a></div>
           </div>
           <div class="nav-outer d-flex align-items-center flex-wrap">
             
             <nav class="main-menu show navbar-expand-md">
               <div class="navbar-header navbar-toggler">
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                          <MdClose style={{ color: "#fff", width: "30px", height: "30px" }} />
                        ) : (
                          <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
                        )}
                    </button>


                    <nav className=" navbar-collapse collapse clearfix">
        				</nav>
                 {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                   <span class="icon-bar"></span>
                 </button> */}
               </div>
               
               <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                 <ul class="navigation clearfix">
                   <li><a href="#">Home</a></li>
                   <li><a href="/#about">About</a></li>
                   <li><a href="/#services">Services</a> </li>
                   <li><a href="/#portfolio">Portfolio</a></li>
                   <li><a href="#">Blog</a> </li>
                   <li><a href="/#contact">Contact us</a></li>
                 </ul>
               </div>
               
             </nav>
             
           </div>
           
           <div class="outer-box d-flex align-items-center flex-wrap">
             
             {/* <div class="search-box-outer">
               <div class="search-box-btn"><span class="flaticon-069-search-1"></span></div>
             </div> */}
             
             <div class="button-box">
               <a href="#" class="theme-btn btn-style-one"><span class="txt">Contact us</span></a>
             </div>
             
             <div class="mobile-nav-toggler">
              {/* <span class="icon flaticon-140-menu-3"></span> */}
                    <button onClick={handleToggle}>
                        {navbarOpen ? (
                          <MdClose style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
                        ) : (
                          <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
                        )}
                    </button>

                    <nav className="clearfix">
                      <ul class="wsmenu-list" className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >
                          <li aria-haspopup="true" activeClassName="active-link"
										        onClick={() => closeMenu()} exact><a href="#">Home</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#about">About</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#services">Services</a> </li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact> <a href="/#portfolio">Portfolio</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="#">Blog</a> </li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#contact">Contact us</a></li>
                      </ul>

        				</nav>
              </div>
             
           </div>
           
         </div>
         
       </div>
         </div>
         
         <div class="sticky-header">
             <div class="auto-container d-flex justify-content-between align-items-center flex-wrap">
                 <div class="logo">
                     <a href="#" title=""><img src="images/logo/CDlogo.png" width="250"  /></a>
                 </div>
         
         <nav class="main-menu">
           
         <div class="navbar-collapse collapse clearfix" id="navbarSupportedContent">
                 <ul class="navigation clearfix">
                   <li><a href="/#about">Home</a></li>
                   <li><a href="/#about">About</a></li>
                   <li><a href="/#services">Services</a> </li>
                   <li><a href="/#portfolio">Portfolio</a></li>
                   <li><a href="#">Blog</a> </li>
                   <li><a href="/#contact">Contact us</a></li>
                 </ul>
               </div>
         </nav>
         
     
         <div class="mobile-nav-toggler">
         <button onClick={handleToggle}>
                        {navbarOpen ? (
                          <MdClose style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
                        ) : (
                          <FiMenu style={{ color: "#7b7b7b", width: "30px", height: "30px" }} />
                        )}
                    </button>

                    <nav className="clearfix">
                      <ul class="wsmenu-list" className={`menuNav ${navbarOpen ? " showMenu" : ""}`} >
                      <div class="logo">
                     <a href="#" title=""><img src="images/logo/CDlogo.png" width="250"  /></a>
                 </div>
                          <li aria-haspopup="true" activeClassName="active-link"
										        onClick={() => closeMenu()} exact><a href="#">Home</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#about">About</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#services">Services</a> </li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#portfolio">Portfolio</a></li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="#">Blog</a> </li>
                          <li className="navbar-link home-link" activeClassName="active-link"
										onClick={() => closeMenu()}
										exact><a href="/#contact">Contact us</a></li>
                      </ul>

        				</nav>
                
         </div>
             </div>
         </div>
     
         <div class="mobile-menu">
             <div class="menu-backdrop"></div>
             <div class="close-btn"><span class="icon flaticon-103-cancel-1"></span></div>
             
             <nav class="menu-box">
                 <div class="nav-logo"><a href="index-2.html"><img src="images/logo.png" alt="" title="" /></a></div>
                 <div class="menu-outer"></div>
             </nav>
         </div>
   
     </header>


    </div>
  )
}

export default Header