export class LocationPreview {
    static id = 100;

    constructor(location, name, onDeletePlace, onUpdatePlace){
        this.id = id++;
        this.lat = location.lat;
        this.lng = location.lng;
        this.name = name;
        this.onDeletePlace = onDeletePlace;
        this.onUpdatePlace = onUpdatePlace;
    }

    render() {
        
        
    }
}