$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   if (wScroll > $(".tim").offset().top - 250) {
  //     $(".tim").addClass("ada");
  //     }

  if (wScroll > $(".igt").offset().top - 350) {
      $(".igt").addClass("ada2");
      
      $(".igq").addClass("ada22");
      $(".igw").addClass("ada22");
       $(".ige").addClass("ada22");
  }

  if (wScroll > $(".igy").offset().top - 350) {
    $(".tim3").addClass("ada1");
  }

  if (wScroll > $(".igm").offset().top - 350) {
    $(".tim4").addClass("ada11");
  }

    
    
    
//   if (wScroll > $(".tim5").offset().top - 250) {
//     $(".tim5").addClass("ada1");
//   }

//   if (wScroll > $(".tim6").offset().top - 250) {
//     $(".tim6").addClass("ada11");
//   }
//   if (wScroll > $(".tim7").offset().top - 250) {
//     $(".tim7").addClass("ada1");
//   }
});
