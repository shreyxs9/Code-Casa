
  $(document).ready(function() {
    $("#banner-area .owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      autoplay:true,
      autoplayTimeout:5000
    });
  });
  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    autoplay : true,
   autoplayTimeout : 3000,
    responsive : {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000 : {
              items: 5
          }
      }
    });
    $("#new  .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive : {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000 : {
                items: 5
            }
        }
    });

  let $qty_up = $(".qty .qty-up");
  let $qty_down = $(".qty .qty-down");
 
  $qty_up.click(function(e){
      let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
      if($input.val() >= 1 && $input.val() <= 9){
          $input.val(function(i, oldval){
              return ++oldval;
          });
      }
  });
     $qty_down.click(function(e){
      let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
      if($input.val() > 1 && $input.val() <= 10){
          $input.val(function(i, oldval){
              return --oldval;
          });
      }
  });




  
 