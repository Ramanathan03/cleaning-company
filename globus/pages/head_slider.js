import Link from 'next/link'
const Head_slider = ()=>(
	<div className="row "  >
  <div id="carouselExampleControls" className="carousels slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/eco.jpg" srcSet={` ${"/eco.jpg"} 480w, ${"/eco.jpg"}  560w, ${"/eco.jpg"} 1080w `} className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">Eco-Friendly <br/> Cleaning Service</h4>
      <button className="btn button"><Link href="/about"><a style={{"color":"white", "text-decoration":"none"}}>Want to Know more?</a></Link></button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide-2.jpg" srcSet={` ${"/slide-2.jpg"} 480w, ${"/slide-2.jpg"} 560w, ${"/slide-2.jpg"}  1080w `} className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">A Caring <br/> Cleaning Team</h4>
      <button className="btn button"><Link href="/about"><a style={{"color":"white", "text-decoration":"none"}}>Want to Know more?</a></Link></button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/slide-3.jpg" srcSet={` ${"/slide-3.jpg"} 480w, ${"/slide-3.jpg"}  560w, ${"/slide-3.jpg"}  1080w `} className="d-block w-100 slider-img" alt="..."/>
      <div className="subtitle">
      <h4 className="head-slider-h4">Giving You <br/>More Time to Spend on <br/> What Really Matter</h4>
      <button className="btn button"><Link href="/about"><a style={{"color":"white", "text-decoration":"none"}}>Want to Know more?</a></Link></button>
      </div>
    </div>
  </div>
  
  
</div>
</div>
)

export default Head_slider