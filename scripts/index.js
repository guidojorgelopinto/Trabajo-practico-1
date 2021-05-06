let main = document.querySelector("#main");
const mybutton = document.getElementById("myBtn");
const promociones = document.getElementById("promociones");

// -------------bienvenida al sitio

alert("DANGER, DANGER, DANGER!!!!!");

// -------------aparece


document.onload = console.log(main);


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

// -------------promociones


window.onscroll = () => {
  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.7
  ) {
    promociones.classList.add("effect1");
  }
};