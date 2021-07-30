import Header from './Head.js'
import Head_slider from './head_slider.js'
import Header_top from './header_top.js'
import Footer from './footer.js'

const index = ()=>(
	<div>
	<Header></Header>
	 <div className="container-fluid">
	 
	 <Header_top>
	 </Header_top>

	 <Head_slider>
	 </Head_slider>

	 <div className="row">
	 <div className="col-md-4 home-maid display">
	 </div>
	 <div className="col-xs-12 col-md-8">
	 <h2 className="cleaning-conscience-h1">Cleaning With a Conscience</h2>
	 <hr className="section-hr1"/>  <hr className="section-hr2"/>

	 <h4 className="cleaning-conscience-h4">Professional Cleaning Services for Home and Office</h4>
	 <p className="cleaning-conscience-p-tag">Cleaning can be a chore and we know you have many choices when you consider hiring a maid service. Because of that, we are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It’s not enough to have trust in the cleaning crew that you let into your home… you also have to trust that they will perform a first-class cleaning job for you. Putting our employees through a rigorous training program ensures each member of our cleaning team understands their role and how it relates to the overall performance of the team.</p>
	 <div className="row">
       <div className="col-md-6">
       <div className="consciene-point-div">
       <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-check2 point-1-in-conscience-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>
         <p className="point-1-in-conscience-pTag">One-off, weekly or fortnightly visits</p>
         </div>
	 </div>
	 <div className="col-md-6">
	 <div className="consciene-point-div">
         <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-check2 point-2-in-conscience-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>
 <p className="point-2-in-conscience-pTag">Keep the same cleaner for every visit</p>
 </div>
	 </div>
	 </div>
	 <div className="row">
       <div className="col-md-12">
       <div className="consciene-point-div">
        <svg width="1.5em" height="2em" viewBox="0 0 16 16" class="bi bi-check2 point-3-in-conscience-icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>
        <p className="point-3-in-conscience-pTag">Vetted & background-checked cleaners</p>
        </div>
	 </div>
	 </div>

	 </div>
	 </div>
   <div className="row">
	 <div className="index-over-video col-md-12">
	   <h4 className='why-us-h4'>Why Our Customers Choose Us?</h4>
	 <div className="row"> 
	 <div className="bg"></div>
	 <div className="row">
	    <div className="col-md-6 point-1-feed">
	    	<h5>We Are Experts</h5>
	    	<p>and domainate and dominate the industry in scale and
	    	scope with an adaptable, extensive network that consistently
	    	delivers exceptional results.
	    	</p>
	    </div>
	    <div className="col-md-6 point-2-feed">
	    	<h5>We are Complete</h5>
	    	<p>and seek to provide exceptional service and engage in proactive behavior.</p>
	    </div>
	 </div>
	 <div className="row">
	    <div className="col-md-6 point-4-feed">
	    	<h5>We Are Committed</h5>
	    	<p>to our customers and are guided in all we do by their needs.
	    	</p>
	    </div>
	    <div className="col-md-6 point-3-feed">
	    	<h5>We Are Driven</h5>
	    	<p>to pursue the highest standards and continuously improve in all aspects of our business.</p>
	    </div>
	 </div>
	 </div>
     </div>
    </div>

     
     <div className="row">
     <div className="col-md-12 client-slider-bg">
         <h1 className="client-say">Our client say</h1>

            <div id="carouselExampleIndicators" class="carousels slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner row">
    <div class="carousel-item active col-md-6 client-slider-div">
      <h4 className="client-slider-h4">Sam</h4>
      <p className="client-side-p"><span className="client-side-colon">“</span>I have used a few different cleaning services but this was the best! They showed up early, did a thorough job and were pleasant and friendly! They took my trash with them, an added bonus, and didn’t rearrange my entire house like some cleaners do.</p>
    </div>
    <div class="carousel-item col-md-6 client-slider-div">
      <h4 className="client-slider-h4">Nadeem</h4>
      <p className="client-side-p"><span className="client-side-colon">“</span>I’m so happy to found them. They are affordable and provide the best customer service experience. I have been using them for over a year already!</p>
    </div>
    <div class="carousel-item col-md-6 client-slider-div">
      <h4 className="client-slider-h4">Terry</h4>
      <p className="client-side-p"><span className="client-side-colon">“</span>One of the best cleanig company that I came a through always recommended</p>
    </div>
    <div class="carousel-item col-md-6 client-slider-div">
      <h4 className="client-slider-h4">Josh</h4>
      <p className="client-side-p"><span className="client-side-colon">“</span>Kind and best customer services, recommend you because they're always on time,keep going guys.</p>
    </div>
    <div class="carousel-item col-md-6 client-slider-div">
      <h4 className="client-slider-h4">Helen</h4>
      <p className="client-side-p"><span className="client-side-colon">“</span>fine work and good customer services that's what I like about</p>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
     </div>
     </div>
    <Footer></Footer>
	</div>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossOrigin="anonymous"></script>


  <script src="https://kit.fontawesome.com/f95e1ce227.js" crossorigin="anonymous"></script>
  
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
     
     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossOrigin="anonymous"></script>
	<script src="/js/main.js"></script>
  </div>
	)
export default index;