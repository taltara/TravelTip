

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

export const locationServices = {

    getPosition,
    showLocation
}