export class LocationPreview {
    // static id = 100;

    constructor(location, onDeletePlace, onUpdatePlace, initMap) {
        this.location = location;
        this.onDeletePlace = onDeletePlace;
        this.onUpdatePlace = onUpdatePlace;
        this.initMap = initMap;
    }

    render() {
        const location = this.location;

        var elLocationDiv = document.createElement('div');
        elLocationDiv.classList.add('fav-location');
        elLocationDiv.addEventListener('click', ()=>{
            this.initMap(location.lat,location.lng);
        })

        var elLocationName = document.createElement('p');
        elLocationName.classList.add('location-name');
        elLocationName.innerText = location.name;

        elLocationDiv.appendChild(elLocationName);

        var elLatLng = document.createElement('div');
        elLatLng.classList.add('lat-lng');
        elLocationDiv.appendChild(elLatLng);

        var elLat = document.createElement('div');
        elLat.classList.add('coord-block');
        var elSpanLat = document.createElement('span');
        elSpanLat.innerText = location.lat;
        elLat.appendChild(elSpanLat);
        elLatLng.appendChild(elLat);

        var elLng = document.createElement('div');
        elLng.classList.add('coord-block');
        var elSpanLng = document.createElement('span');
        elSpanLng.innerText = location.lng;
        elLng.appendChild(elSpanLng);
        elLatLng.appendChild(elLng);


        var elBtn = document.createElement('i');
        elBtn.classList.add('fas', 'fa-times');
        elBtn.addEventListener('click', ()=>{
            this.onDeletePlace(this.id);
        })
        elLocationDiv.appendChild(elBtn);
        return elLocationDiv;
    }
}