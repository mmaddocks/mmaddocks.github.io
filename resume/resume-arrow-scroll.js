
/* Scroll to ".content-container". Offsetting/subtracting the top */
$(document).ready(function(){

    var scroll_down = $(".arrow-down-header");

	scroll_down.on('click', function(event){
        event.preventDefault();
		$('html,body').animate({
            scrollTop: $(".content-container").offset().top
        }, 800);
	});

// Scroll to the top - no offset //
    var scroll_top = $(".arrow-up-top");

	scroll_top.on('click', function(event){
        event.preventDefault();
		$('html,body').animate({
            scrollTop: 0
        }, 800);
	});
});



/* Alternative option to jQuery, using pure JS for scroll. Requires "smoothscroll.js" polyfill to add browser support for "behaviour: 'smooth'"


// Load function(s) on window.onload - invoked by anonymous function.
window.onload = function() {
    scroll_top();
    // additional functions();
};

// add event listener on load as alternative and wrap around script.
// window.addEventListener('load', function() { }

function scroll_top() {
      // scroll to top
      document.querySelector('.arrow-up-top').addEventListener('click', function(event) {
          event.preventDefault();
        document.querySelector('.header-container').scrollIntoView({ behavior: 'smooth' });
      });
}

*/
