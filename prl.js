$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  
  if (wScroll > $(".prl2").offset().top - 250) {
    $(".plcs").addClass("ada");
  } else {
       $(".gmbr").removeClass("ada")
  }

  if (wScroll > $(".prl3").offset().top - 250) {
    $(".prl3").addClass("ada");
    $(".ya").addClass("kanan");
  } else {
    $(".prl3").removeClass("ada");
  }
  if (wScroll > $(".prl4").offset().top - 250) {
    $(".prl4").addClass("ada");
    $(".ya").addClass("kanan");
  } else {
    $(".prl4").removeClass("ada");
  }
  if (wScroll > $(".prl5").offset().top - 250) {
    $(".prl5").addClass("ada");
  } else {
    $(".prl5").removeClass("ada");
  }
  if (wScroll > $(".prl6").offset().top - 250) {
    $(".prl6").addClass("ada");
  } else {
    $(".prl6").removeClass("ada");
  }
  if (wScroll > $(".prl7").offset().top - 250) {
    $(".prl7").addClass("ada");
  } else {
    $(".prl7").removeClass("ada");
  }
});
