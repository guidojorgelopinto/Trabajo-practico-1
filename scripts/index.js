// -------------Boton

const mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// -------------Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}



















// const goTopBtn = document.getElementById("goTopBtn");
// // const testimoniales = document.getElementById("testimoniales");
// // const info = document.getElementById("info");

// goTopBtn.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// window.onscroll = () => {
//   scrollTop > vh && scrollTop !== 0
//     ? (goTopBtn.style.display = "flex")
//     : (goTopBtn.style.display = "none");
// };

// window.onscroll = () => {
//   if (
//     document.documentElement.scrollTop >
//     document.documentElement.clientHeight * 0.7
//   ) {
//     testimoniales.classList.add("effect2");
//   }
//   if (
//     document.documentElement.scrollTop >
//     document.documentElement.clientHeight * 1.5
//   )
//     info.classList.add("effect2");
// };
