

$(document).ready(function(){
    $('.slider-area').slick({
        autoplay: true,
        speed: 800,
        arrow:true,
        dots: true
        // fade: true


    });


  });
  $('.team-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 300,
        arrow: true
      });

      
      
      
      const acc = document.getElementsByClassName("accordion");
      const panel = document.getElementsByClassName("panel");
      let i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            var panel = this.nextElementSibling;
            panel.classList.toggle("active");
     
        });
      }


    //   AOS Animation
    AOS.init();