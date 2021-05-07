let hero = document.querySelector("#hero");
const mybutton = document.getElementById("myBtn");
const promociones = document.getElementById("promociones");

// -------------bienvenida al sitio

alert("Bienvenidos");

// -------------aparece


document.onload = console.log(hero);

// -------------promociones

window.onscroll = () => {
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.7
  ) {
    promociones.classList.add("effect2");
  }
};

// -------------boton arriba


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

// -------------slider

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}