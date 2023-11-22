
        const nav = document.querySelector("nav");
        const hamburger = document.querySelector(".hamburger");
        const menu = document.querySelector(".menu");

        hamburger.addEventListener('click', function(){
          nav.classList.toggle("turun");
          menu.classList.toggle("turun");
        });

    
        // dark modee
// const toggle = document.getElementById('toggle-dark');



// toggle.addEventListener('click', function () {
//     this.classList.toggle('bi-moon-stars-fill');
//     if (this.classList.toggle('bi bi-brightness-high-fill')) {
//         document.body.setAttribute('id', 'darkMode')
//     } else {
//         document.body.setAttribute('id','')
//     }
// })

var icon = document.getElementById("icon");

icon.onclick = function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        icon.className =
          "bi-brightness-high-fill kiwo cikwrr glass";
    } else {
        icon.className =
          "bi-moon-stars-fill iuyy cikwrr glas";
    }
}



//hide scroll nav
// window.onscroll = function () { scrollFunction() };
// var cikwr = document.getElementsByClassName("cikwr");
// var cikwrr = document.getElementsByClassName("cikwrr");


// function scrollFunction() {
//     if (document.body.scrollTop > 20 ||
//         document.documentElement.scrollTop > 20) {
//             cikwr.className = "cikwrr";
//     } else {
//             cikwrr.className = "cikwr";
//         }
// }
 
// scrollllllllllll

//   ScrollReveal({
//     reset: true,
//     distance: "70px",
//     duration: 1000,
//     delay: 10000,
//   });

//   ScrollReveal().reveal(".satu-p", { delay: 2000, origin: "left" });
// lpp
// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();

//   // if (wScroll > $('.hero9').offset().top - 300) {
//   //   $('.hero9').addClass('b');

   
   

//   // }
//    if (wScroll > $('.prl2').offset().top - 550) {
//     $('.gmbr').addClass('ada');
   
   

//   }
  
//   if (wScroll > $('.prl3').offset().top -  550) {
//     $('.prl3').addClass('ada');
//     $('.ya').addClass('kanan');
   

//   } 
//   if (wScroll > $('.prl4').offset().top -  250) {
//     $('.prl4').addClass('ada');
//     $('.ya').addClass('kanan');
   
   

//   }
//   if (wScroll > $('.prl5').offset().top - 250) {
//     $('.prl5').addClass('ada');
   
   

//   }
//   if (wScroll > $('.prl6').offset().top -  250) {
//     $('.prl6').addClass('ada');
   
   

//   }
//   if (wScroll > $('.prl7').offset().top - 250) {
//     $('.prl7').addClass('ada');

   
   

//   }


 

  

 
 

  

 
  
// });


// $(window).scroll(function () {
//   var wScroll = $(this).scrollTop();

//   if (wScroll > $('.hero9').offset().top - 250) {
//     console.log('ok')

   
   

//   }

  
// });


// $(window).scroll(function () {
//   var wScroll2 = $(this).scrollTop();



//   if (wScroll2 > $('.prl2').offset().top - 200) {
//     $('.prl2').addClass('ada');
   
   

//   }

//   if (wScroll2 > $('.prl3').offset().top - 250) {
//     $('.prl3').addClass('ada');
   
   

//   }

//   if (wScroll2 > $('.prl4').offset().top - 200) {
//     $('.prl4').addClass('ada');
   
   

//   }

//   if (wScroll2 > $('.prl5').offset().top - 250) {
//     $('.prl5').addClass('ada');
   
   

//   }

//   if (wScroll2 > $('.prl6').offset().top - 250) {
//     $('.prl6').addClass('ada');
   
   

//   }

//   if (wScroll2 > $('.prl7').offset().top - 250) {
//     $('.prl7').addClass('ada');

   
   

//   }

  

 
  
// });