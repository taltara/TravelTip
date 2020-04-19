

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
        .then(res => { return res.data.result[0]})
        .then(res => addLocation(res))
}

export const locationServices = {

    getPosition,
    showLocation,
    getLocationData
}