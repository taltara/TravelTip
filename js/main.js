import { utilService } from './services/util-services.js';
import { locationServices } from './services/location-services.js';
import { LocationPreview } from './components/location-preview.js';

export const mainController = {
    
}

window.addEventListener('load', onInit);
var map;
var hello;

function onInit() {
    initMap();
    bindEvents();
    locationServices.createLocations();
    var locations = locationServices.getLocations();
    if (locations && locations.length) render();
}

function bindEvents() {
    document.querySelector('.current-location').addEventListener('click', locationServices.getPosition);
    document.querySelector('.btn-go').addEventListener('click', onSearchLocation);

}

function renderCards() {
    const elCardsList = document.querySelector('.my-locations'); 
    elCardsList.innerHTML = '';
    var locations = locationServices.getLocations();
    locations.forEach(location =>{
        var locationPreview =  new LocationPreview(location,onDeletePlace, onUpdatePlace, initMap);
        const elLocation = locationPreview.render();
        elCardsList.appendChild(elLocation);
    })
}

function renderLocationInfo() {

}

function render() {
    renderCards();
    // renderLocationInfo();
}



function onSearchLocation() {
    var elSearchValue = document.querySelector('.location-input').value;
    locationServices.getLocationData(elSearchValue);
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


    map.addListener('click', function (e) {

        onNewLocation(e);
    });
}

function onDeletePlace() {
    return;
}

function onUpdatePlace() {
    return;
}

