
// // -------------bienvenida al sitio

// alert("DANGER, DANGER, DANGER!!!!!");

// ------------- efecto header

const header = document.getElementById ("header")


windows.onscroll = () => {

  if (
    document.documentElement.scrollTop >
    document.documentElement.clientHeight * 0.1
  ) {
    header.classList.add(efectt);
  }
};


// -------------aparece

let main = document.querySelector("#main");

document.onload = console.log(main);


// -------------boton arriba

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