
"use strict" ;

var toggleMenu = function () {
  var menu = document.querySelector('.nav-small');
  menu.classList.toggle('hide');
};

var button = document.querySelector('.btn-menu');
button.addEventListener('click', toggleMenu);

var menuItems = ["Cursos", "Empresas", "Voluntariado", "Equipo", "Blog", "Contacto"];


var nav = document.querySelector(".nav");
for (var i = 0; i < menuItems.length; i++) {
  nav.innerHTML += "<li><a href='#'>" + menuItems[i] + "</a></li>";
}
