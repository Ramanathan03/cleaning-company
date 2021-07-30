import Header_top from './header_top.js'
import Header from './Head.js'
import Footer from './footer.js'
import Stripecontainer from './stripe.js'
import CurrencyInput from 'react-currency-input-field';

const contact = ()=>(
	<div>
	 <Header></Header>
        <Header_top></Header_top>
        
          <div className="row">
	<div className="col-md-12">
   <h1 style={{"text-align": "center",
    }} className="cleaning-conscience-h1">Contact Us</h1>
   <hr className="section-hr1 hr-adjustment"/>  <hr  className="section-hr2 section-hr-2-adjust"/>
   </div>
   </div>
    <div className="row contact-margin">
    <div className="col-md-6">
       <div class="form-group">
        <label className="contact-input-label">Full Name </label>
        <input name="name" placeholder="Fullname" id="fullname-input" className="contact-input" />
        </div>
        <div class="form-group">
        <label className="contact-input-label" style={{left:'-7px'}}>Amount</label>
        <CurrencyInput
  id="input-currency"
  name="input-name"
  className="contact-input"
  placeholder="Enter amount"
  defaultValue={100}
  decimalsLimit={2}
  onValueChange={(value, name) => console.log(value, name)}
/>
</div>
    	<Stripecontainer />
     </div>
     <div className="col-md-6">
    	<div className="">
     		<svg style={{float: 'left', marginLeft: '115px;'}} width="2em" height="3em" viewBox="0 0 16 16" class="bi bi-geo-alt " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
  <path fill-rule="evenodd" d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg>
			<h4 className="contact-address">Address</h4>
            <p className="contact-des">214 Tooting High Street,<br/> London, <br/>SW17 OSG</p>
</div>
        
        <div className="">
        <svg style={{float: 'left', marginLeft: '115px;'}} width="2em" height="3em" viewBox="0 0 16 16" class="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"/>
</svg>  
<h4 className="contact-address">Phone 24/7</h4>
<p  className="contact-des">02087151292</p>
        </div>

        <div className="">
                
                <svg style={{float: 'left', marginLeft: '115px;'}} width="1.5em" height="1.8em" viewBox="0 0 16 16" class="bi bi-clock-fill " fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
          </svg>
          <h4 className="contact-address">Working Hours</h4>
          <p className="contact-des" style={{top:'-3px'}}>Mon-Fri:</p>
          <p className="contact-des" style={{top: '-18px'}}>10:00am - 5:00pm</p>
            </div>
    </div>
    </div>
   
    		
    	
        <Footer></Footer>
      </div>
	)

export default contact