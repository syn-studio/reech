/*-----------------------------------------------------------------------------/
/ Custom Theme JS
/-----------------------------------------------------------------------------*/

// Insert any custom theme js here...


/* HC - Reload page after adding item to cart - 31 Oct '17 
$('.product__add-to-cart-button').on('click', function(e){
  setTimeout(function(){location.reload();}, 100);
  
});*/

$('.product-form').on('submit', function(e) {
  setTimeout(function(){location.reload();}, 300);
});

/* HC - Refresh cart on change of items - 2 Nov '17 */
$('.cart-drawer__item-quantity').on('change', function(e) {
  setTimeout(function(){location.reload();}, 300);
});
$(document).ready(function(){
  var i =1;
 var autoPlay = $(".slideshow__buttons.critical-hide").attr('autoplaytime');
  var interval = setInterval(function() {
  $('.slideshow__button button').each(function(index, obj)
	{
  		var loopleng =  $('.slideshow__button button').length;   
		var changval = $(this).attr('data-loop');
    	if(loopleng >= i){
			if(changval == i){		
			$(this).trigger('click');        
             return false;
        	}
    	}else{         
        	i=0;
        }
       
	});
   i++;
     return false;
  },autoPlay);
 $(function(){
  $(window).scroll(function(){
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        $("#shopify-section-slideshow").css("visibility", "hidden");
       } else {     
      $("#shopify-section-slideshow").css("visibility", "visible");
        
    }
  });
});
});



