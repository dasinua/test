(function($, undefined){
    $(function(){

    	// menu
    	var checkbox = $('.checkbox');
    	var daMenu = $('#daMenu');

		checkbox.on('click', function(){
	    	daMenu.slideToggle();
		});

	    //fixed menu
	     var daHeader = $('#daHeader');
	     var daNav = $('#daNav');
		 var headerH = daHeader.height();
		 var navH = daNav.innerHeight();

		    $(document).on("scroll", function() {

		        var documentScroll = $(this).scrollTop();

		        if(documentScroll > headerH) {
		            daNav.addClass('da-fixed');

		            daHeader.css({
		                "paddingTop": navH
		            });
		        } else {
		            daNav.removeClass('da-fixed');
		            daHeader.removeAttr("style");
		        }

		});

		// anchors
		var menuLink = $('#daMenu a');
		menuLink.on("click", function(event) {

		        event.preventDefault();

		        var currentBlock = $(this).attr("href"),
		            currentBlockOffset = $(currentBlock).offset().top;

		        $("html, body").animate({
		            scrollTop: currentBlockOffset - 20
		        }, 500);

		});

		//slick 
		$('.slick-sliders').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  fade: false,
		  dotsClass: 'my-dots-class',
		  nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/left.png"></button>',
          prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/right.png"></button>',
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },
		     {
		      breakpoint: 576,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        infinite: true,
		      }
		    },

		  ]

		});

		// modalBid
		$('.link-bid').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalBid')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 400);
			});
		});

		$('.modal-close, .overlay').click( function(){
			$('#modalBid, #thanks').animate({opacity: 0, top: '40%'}, 400,
					function(){
						$(this).css('display', 'none');
						$('.overlay').fadeOut(200);
					}
			);
		});

		//mail
	    $('#form, #formBid').submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $('#modalBid').css('display', 'none');
	      $('#thanks')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 400);

	      $('#form, #formBid').trigger("reset");

	    });
	    return false;
	    });

	    //maskedinput
	    var maskedinput = $('.maskedinput');  
	    maskedinput.mask('+7(999) 999-9999');

		// button-top
		var buttonTop = $('#buttonTop');
		var bodyHtml = $('body,html');
	    $(window).scroll(function() {

	        if($(this).scrollTop() != 0) {
	        buttonTop.fadeIn();
	        } else {
	        buttonTop.fadeOut();
	        }
	        });
	        buttonTop.click(function() {
	        bodyHtml.animate({scrollTop:0},800);
	    });
		
		
		
    });
})(jQuery);
