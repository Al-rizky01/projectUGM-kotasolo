$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

//   if (wScroll > $(".tim").offset().top - 250) {
//     $(".tim").addClass("ada");
//     }
    
     if (wScroll > $(".tim2").offset().top - 350) {
       $(".tim2").addClass("ada11");
    }
    
     if (wScroll > $(".tim3").offset().top - 350) {
       $(".tim3").addClass("ada1");
    }
    
     if (wScroll > $(".tim4").offset().top - 350) {
       $(".tim4").addClass("ada11");
    }
    
     if (wScroll > $(".tim5").offset().top - 350) {
       $(".tim5").addClass("ada1");
    }
    
     if (wScroll > $(".tim6").offset().top - 350) {
       $(".tim6").addClass("ada11");
     }
if (wScroll > $(".tim7").offset().top - 250) {
  $(".tim7").addClass("ada1");
}
  
});
