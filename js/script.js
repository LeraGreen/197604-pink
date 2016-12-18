'use strict';

var mainMenuToggler = document.getElementById('main-menu-toggler');
var mainMenuWrapper = document.getElementById('main-menu-wrapper');

mainMenuToggler.onclick = function(event) {
  event.preventDefault();
  mainMenuToggler.classList.toggle('page-header__menu-toggler--close')
  mainMenuToggler.classList.toggle('page-header__menu-toggler--open');
  mainMenuWrapper.classList.toggle('page-header__top-line--open');
}

function closeMenu() {
  if (mainMenuWrapper.classList.contains('page-header__top-line--open')) {
    mainMenuWrapper.classList.remove('page-header__top-line--open');
    mainMenuToggler.classList.remove('page-header__menu-toggler--close')
  }
}

closeMenu();

var map;
function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 59.938536, lng: 30.3224549},
    zoom: 15
  });

  setMarkers(map);
}


function setMarkers(map) {
  var points = [
    ['Pink', 59.938536, 30.3224549],
  ];

  var image = {
    url: 'img/icon-map-marker.svg',
    size: new google.maps.Size(36, 36),
    anchor: new google.maps.Point(18, 18)
  };

  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    var marker = new google.maps.Marker({
      position: {lat: point[1], lng: point[2]},
      map: map,
      icon: image,
      title: point[0]
    });
  }
}
