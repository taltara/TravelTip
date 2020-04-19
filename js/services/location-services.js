import { mainController } from '../main.js';
import { utilService } from './util-services.js';

const KEY = 'locations';
var gLocations = [];


function getLocations() {
    return gLocations;
}

function createLocations() {
    var locations = utilService.getFromStorage(KEY);
    gLocations = (locations && locations.length) ? locations : [];
}

function createLocation(location, name) {
    return {
        id: utilServices.makeId,
        lat: location.lat,
        lng: location.lng,
        name: name
    }
}

function getPosition() {
    if (!navigator.geolocation) {
        alert("HTML5 Geolocation is not supported in your browser.");
        return;
    }
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError);
}

function showLocation(position) {
    console.log(position);
    initMap(position.coords.latitude, position.coords.longitude);
}

function getLocationData(searchValue) {
    var prmData = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchValue}&key=AIzaSyC5ayRzgQ3VwMWHFPVa8iRTCJhuEx3Onwo`)
        .then(res => { return res.data.results[0] })
        .then(res => addLocation(res))
}

function addLocation(res) {
    if (!res) return;
    var location = locationServices.createLocation(res.geometry.location,
        res.formatted_address)
    gLocations.push(location);
    utilService.saveToStorage(KEY, gLocations);
   
}

export const locationServices = {

    getPosition,
    showLocation,
    getLocationData,
    getLocations,
    createLocations
}