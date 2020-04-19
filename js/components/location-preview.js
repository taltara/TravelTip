export class LocationPreview {

    constructor(id, location, name, onDeletePlace, onUpdatePlace){
        
        this.id = id;
        this.lat = location.lat;
        this.lng = location.lng;
        this.name = name;
        this.onDeletePlace = onDeletePlace;
        this.onUpdatePlace = onUpdatePlace;
    }

    render () {

        
    }
}