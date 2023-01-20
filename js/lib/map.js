import L from 'leaflet';
import 'leaflet.tilelayer.colorfilter';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { loadData } from './weather';
import {zoom} from "leaflet/src/control/Control.Zoom";

const initialCoords = [54.4606017, 17.0281356];

export default () => {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        const map = L.map(mapElement, {
            center: initialCoords,
            zoom: 12,
            gestureHandling: true,
        }
        );

        map.doubleClickZoom.disable();

        const filter = [
            'grayscale:100%',
        ];

        L.tileLayer.colorFilter('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            filter,
        }).addTo(map);

        map.on('dblclick', function (event){
            let marker = L.marker(event.latlng).addTo(map);
            marker.bindPopup(`${event.latlng}`).openPopup();
            marker.dragging.enable();
            marker.on('move', function (event){
               marker.setPopupContent(`${event.latlng}`);
            });
        });

        map.on('dra')
    }
};
