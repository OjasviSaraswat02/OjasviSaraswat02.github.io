$(document).ready(function(){
    $(window).scrollTop(0);
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
});

const handleLoader = () => {
  setTimeout(() => {
      $('#loader').fadeOut();
  }, 1500);
}
handleLoader();

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  let current_scroll = window.scrollY + window.innerHeight;
  let footer = $('#footer').offset().top + ($('#footer').outerHeight() / 2);

  console.log(current_scroll);

  if (current_scroll > footer){
    $('#myBtn').css('filter','invert(100%)');
  }else{
    $('#myBtn').css('filter','none');
  }


  if (window.scrollY > 20) {
    $('#myBtn').css('display','block');
  } else {
    $('#myBtn').css('display','none');
  }

  if (current_scroll > $('#skills').offset().top + 100 ){
      $('#skills .progress-bar').removeClass('hold');
  }
  if (current_scroll > $('#language').offset().top + 100 ){
      $('#language .progress-bar').removeClass('hold');
  }
}
if (current_scroll < $('#skills').offset().top + 100 ){
      $('#skills .progress-bar').addClass('hold');
  }
  if (current_scroll < $('#language').offset().top + 100 ){
      $('#language .progress-bar').addClass('hold');
  }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
