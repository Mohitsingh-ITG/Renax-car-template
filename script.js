




let header = document.querySelector("#heads");
let img = document.querySelector("#logo");
let text_colors = document.querySelectorAll(".single0");  // corrected variable name to indicate it's a collection

window.addEventListener("scroll", function () {
  if (window.scrollY >= 40) {
    header.classList.add("sticky");
    img.src = "assets/logo-dark.png";

    // Loop through each element with the class ".single0" and apply the class toggle
    text_colors.forEach(function (text) {
      text.classList.add("text_black");  // apply class on scroll down
    });

  } else {
    header.classList.remove("sticky");
    img.src = "assets/logo-light.png";

    // Remove the "text_black" class when scrolling back up
    text_colors.forEach(function (text) {
      text.classList.remove("text_black");
    });
  }
});

let bar = document.querySelector("#bar")
let menu = document.querySelector(".main-menu")
let menulist = document.querySelector(".main_open ")
bar.addEventListener("click", function btn() {
  console.log("fss")
  menu.classList.toggle("main_open")
})





$('.sliders').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});



$('.allsliders').slick({
  dots: true,
  infinite: true,
  speed: 500,

  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
});

var open = document.querySelector("#open");

open.addEventListener("click", function () {

  let option = document.querySelector(".select_div")
  console.log("ds")
  option.classList.toggle("select_div2");

});

var open2 = document.querySelector("#open2");
open2.addEventListener("click", function () {

  let option = document.querySelector(".or")
  console.log("ds")
  option.classList.toggle("select_div2");

});

let select_div = document.querySelector(".select_div");
open.addEventListener("click", function () {
  select_div.style.display = select_div.style.display === 'block' ? 'none' : 'block';
});



$('.sec5_silders').slick({

  infinite: true,
  speed: 300,

  slidesToShow: 1.6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
$('.sec9allslide').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToShow: 1
      }
    }
  ]
});
$('.allflags').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

let form = document.querySelector(".pop_up_model_main");
let formbox = document.querySelector(".pop_up_container");
let bxcross = document.querySelector("#bxcross");
let box_click = document.querySelectorAll(".box_click");

box_click.forEach((item)=>{
item.addEventListener("click", function () {
  console.log("rsf")
  form.style.visibility = "visible"
  form.style.opacity = "1"
  formbox.style.transform = " translateY(100px)";
   formbox.style.visibility = "visible"
  formbox.style.opacity = "1"
});
})


bxcross.addEventListener("click", function () {
  form.style.visibility = "hidden"
  formbox.style.visibility = "hidden"

});

