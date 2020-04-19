import { utilService } from './services/util-services.js';
import { locationServices } from './services/location-services.js';
import { LocationPreview } from './components/location-preview.js';

window.addEventListener('load', onInit);
var map;
const KEY = 'locations';
var gLocations = [];

function onInit() {
    initMap();
    bindEvents();
    gLocations = getFromStorage(KEY);
    if (gLocations.length) render();
    render();
}

function bindEvents() {
    document.querySelector('current-location').addEventListener('click', getPosition);
    document.querySelector('btn-go').addEventListener('click', onSearchLocation);

}

function renderCards() {

}

function renderLocationInfo() {

}

function render(){
    renderCards();
    renderLocationInfo();
}

function addLocation(res) {
    var location = new LocationPreview(res.geometry.location, res.formatted_address,
        onDeletePlace, onUpdatePlace);
    gLocations.push(location);
    saveToStorage(KEY, gLocations);
    location.render();
}

function onSearchLocation() {
    var elSearchValue = document.querySelector('.location-input').value;
    getLocationData(elSearchValue);
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