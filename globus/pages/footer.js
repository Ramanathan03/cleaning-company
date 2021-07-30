import Link from 'next/link'
const Footer = ()=>(
        <div>
	    <div className="row footer-link">
       <ul className="nav-ul">
       	<li className="col-md-3 nav-text footer-link-li" >
       	<Link href="/">
       	 <a style={{color: "white", "text-decoration":"none"}}>Home</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text footer-link-li">
       	<Link href="/about"> 
       	   <a style={{color: "white", "text-decoration":"none"}}>About Us</a>
        </Link>
       	</li>
       	<li className="col-md-3 nav-text footer-link-li">
       	<Link href="/services"> 
       	<a style={{color: "white", "text-decoration":"none"}}>Our Services</a>
       	</Link>
       	</li>
       	<li className="col-md-3 nav-text footer-link-li"><Link href="/contact"><a style={{color: "white", "text-decoration":"none"}}>Contact</a></Link></li>
       </ul>
      </div>
       <div className="row">
     	<div className="col-md-4">
     	<Link href="/">
       	 <a className="logo footer-logo display"></a>
       	</Link>
			
     	</div>
     	<div className="col-md-4">
     		<h4 className="footer-contact-h1">Contact Us</h4>
     		<div>
     		<svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-geo-alt location-pin" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
            <p className="footer-our-address">214 Tooting High Street,<br/> London, <br/>SW17 OSG</p>
</div>
     <div className="footer-contact-div">
     <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi footer-phone-icon bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg>
        <p className="footer-ph">02087151292</p>
     </div>

     	</div>
     	<div className="col-md-4">
     		<div className="footer-time-div">
     			 <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-clock-fill location-pin " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>
          <p className="footer-our-address">Mon-Fri:</p>
          <p className="footer-our-address">10:00am - 5:00pm</p>
     		</div>
     		<div>
     		<svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-chat-dots location-pin" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
<p className="footer-our-address">globuscleaningservices@gmail.com</p>
     		</div>
     	</div>
     </div>
     </div>
	)

export default Footer;