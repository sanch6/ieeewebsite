/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() { //when document(DOM) loads completely. 
        // Transition effect for navbar 
        $(window).scroll(function() { //function is called while you scrolls 
          // checks if window is scrolled more than 300px, adds/removes solid class
          if($(this).scrollTop() > 300) { 
              $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
              $('.dropdown-menu').addClass('solid');

          } else {
              $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
			   $('.dropdown-menu').removeClass('solid');
          }
        });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { //when document loads completely.
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); //check if element with 'navbar-collapse' class has a class called show. Returns true and false.
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { // if _opened is true and clickover(element we clicked) doesn't have 'navbar-toggler' class
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ //document is loaded
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {//click on any link;anchor tag;

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") { //for e.g. website.com#home - #home
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      //console.log('hash:',hash)

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ //animate whole html and body elements
        scrollTop: $(hash).offset().top //scroll to the element with that hash
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash; //website.com - website.com#home
        //Optional remove "window.location.hash = hash;" to prevent transparent navbar on load
      });
    } // End if
  });
});

/*========== BOUNCING DOWN ARROW ==========*/
//down arrow at top
$(document).ready(function(){
$(window).scroll(function(){ //browser scroll 
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); //set opacity css from 1 to -(negative) infinity of element with class 'arrow'
  //250 is fade pixels
  });
});

/*========== MEET THE TEAM ==========*/
//theCarousel
$(document).ready(function(){ //when document is ready
  $("#team-slider").owlCarousel({ //owlCarousel settings
        items:3, //by default there are 3 slides display.
        autoplay:true, //the slides will change automatically.
        smartSpeed:700, //speed of changing wil be 700
        loop:true, //infinite loop; after the last slide, first slide starts
        autoplayHoverPause:true, //when you put mouse over Carousel, slide changing will stop
        responsive : { //responsiveness as screen size changes
            // min-width: 0px
            0 : {
                items: 1 //on devices with width 0 to 579px show 1 slide
            },
            // min-width: 579px
            576 : {
                items: 2 //on devices with width 579px to 768px show show 2 slides
            },
            // min-width: 768px
            768 : {
                items: 3 //on devices with width 768px and above show 3 slides 
            }
        }
  }
  );
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { //when document is ready
  $(window).scroll(function() { //when webpage is scrolled
    if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
      $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
    } else { //if not
      $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});


//Optional Refresh Page at top of document on load instead of at # hash
/*

$(document).ready(function(){
    $('html, body').scrollTop(0);
    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
});

*/

//UPDATE ADDITIONS:

//OPTION TO MAKE PRICING & TEAM SECTIONS COLUMN HEIGHT EQUAL
/*

$(document).ready(function(){

    // Select and loop the container element of the elements you want to equalise
    $('.row').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.card', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.card',this).height(highestBox);
                    
    }); 

});



// OPTION TO MAKE ALL ANIMATIONS THE SAME "FADEINUP" ANIMATION ON MOBILE DEVICES

$(document).ready(function() { 
if ($(window).width() < 768 ) {
   $("div").attr('data-animation','fadeInUp');
}
});

// IF LINKING TO ANOTHER PAGE WITH A HASH AT THE END OF THE LINK,
SUCH AS domain.com#services THEN USE THE FOLLOWING SMOOTH SCROLL INSTEAD
OF THE SMOOTH SCROLL USED AT THE TOP OF THIS DOCUMENT.

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


*/
