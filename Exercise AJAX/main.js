'use strict';

var nameElement = document.getElementById('Name');
var photo = document.getElementById('photo');
var repositories = document.getElementById('repositories');
var inputName = document.getElementById('input-name');
var btnSearch = document.getElementById('btn-search');
var errorInfo = document.getElementById('error-info');

function getInfoUser(){
  var request = new XMLHttpRequest();

  request.open("GET",'https://api.github.com/users/' + inputName.value, true);

  request.onload = function(){
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      nameElement.innerHTML = data.login;
      photo.src = data.avatar_url;
      repositories.innerHTML = data.public_repos;
    } else {
      errorInfo.innerHTML ='Error del servidor, puede que el archivo no exista o que se haya producido un error interno en el servidor';
    }
  };
  request.onerror = function() {
    errorInfo.innerHTML ='Error al tratar de conectarse con el servidor';
  };
  request.send();
}

btnSearch.addEventListener('click', getInfoUser);
