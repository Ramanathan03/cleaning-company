import Link from 'next/link'
import React from "react";
import $ from "jquery";

class Header_top extends React.Component {
    componentDidMount(){
           $(window).scroll(function(event) {
   let scrollval = $(this).scrollTop();
   let elementNavOffset = $(".nav-ul-offset").offset().top;

   if (scrollval > elementNavOffset + 50 ) {
        $(".nav-ul-offset").addClass("isShowing");
        $(".nav-text a").addClass("nav-text-color");
        
      }
      
      if(scrollval === 0){
        $(".nav-ul-offset").removeClass("isShowing");
        $(".nav-text a").removeClass("nav-text-color");
      }

      let elementOffset = $("home-maid").offset.top;

      if (scrollval > elementOffset - $(window).height() / 2) {
        $(".home-maid").addClass("come-in");
      }
      
});
           
           
             }
  render(){
      


 return(
	<div className="">
      <div className="row">
      <div className="col-xs-12 col-md-5">
         <Link href="/">
         <a className="logo"></a>
         </Link>
        </div>
      <div className="col-md-3 display">
          <p className="tag-line">We are Cleaning Experts!</p>
        </div>
      <div className="col-md-2 display">
      <div className="head-opening-hours">
      <div>
        <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-clock-fill clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>
          <p className="head-opening-hours-p">10:00am - 5:00pm <br/> Mon - Fri</p>
        </div>
        </div>
        </div>
      <div className="col-md-2 display">
      <div style={{position:"relative", left:"-20px"}}>
        <p className="head-contact-info">Call us on: <br/> 
        <span className="head-contact-info-span">02087151292</span></p>
        </div>
        </div>
      </div>

      <hr className="header-line display"/>
      
      <div className="row">
       <ul className="nav-ul nav-ul-offset display">
       	<li className="col-md-3 nav-text" >
       	<Link href="/">
       	 <a>Home</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text">
       	<Link href="/about"> 
       	   <a>About Us</a>
        </Link>
       	</li>
       	<li className="col-md-3 nav-text">
       	<Link href="/services"> 
       	<a>Our Services</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text"><Link href="/contact">Contact</Link></li>
       </ul>
      </div>




  <div class="fixed-top">
  
  
    <button class="navbar-toggler sidenav-trigger" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <svg width="3em" height="3em" viewBox="0 0 16 16" class="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
    </button>

    <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark mobile-nav">
      <ul>

    <li className="col-md-3 nav-text nav-text2" >
         <Link href="/">
          <a>Home</a>
         </Link>
         </li>
         <li className="col-md-3 nav-text nav-text2">
         <Link href="/about"> 
            <a>About Us</a>
        </Link>
         </li>
         <li className="col-md-3 nav-text nav-text2">
         <Link href="/services"> 
         <a>Our Services</a>
         </Link>
         </li>
         <li className="col-md-3 nav-text nav-text2"><Link href="/contact">Contact</Link></li>
  </ul>
    </div>
  </div>
  
</div>



      
     </div>
    
)
}
}
export default Header_top