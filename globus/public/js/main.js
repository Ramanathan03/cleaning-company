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

