import { utilService } from './services/util-services.js';
import { locationServices } from './services/location-services.js';

window.addEventListener('load', onInit);
var map;

function onInit() {
    
    initMap();
    bindEvents();
    render();
}

function bindEvents() {
   
}

function render() {

}

function renderLocations() {
  

}

function initMap(lat = null, lng = null) {
    console.log('are you here');
    var centerOn;
    if (!lat || !lng) {
        // Eilat
        centerOn = { lat: 29.5577, lng: 34.9519 };
    } else {

        centerOn = { lat, lng };
    }
    var elMap = document.querySelector('#map');
    
    var options = { center: centerOn, zoom: 10, gestureHandling: 'greedy' };
    map = new google.maps.Map(elMap, options);


    map.addListener('click', function(e) {

        onNewLocation(e);
    });
}