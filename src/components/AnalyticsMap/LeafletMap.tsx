import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SalesLocation } from '@/data/salesLocations';

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

interface LeafletMapProps {
    locations: SalesLocation[];
}

const defaultCenter: [number, number] = [7.8731, 80.7718]; // Sri Lanka center

export default function LeafletMap({ locations }: LeafletMapProps) {
    return (
        <MapContainer
            center={defaultCenter}
            zoom={2}
            style={{ height: '400px', width: '100%', borderRadius: '12px' }}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />

            {locations.map((loc) => {
                // Only draw lines if it is not the exact center coordinate
                const isCenter = loc.lat === defaultCenter[0] && loc.lng === defaultCenter[1];

                return (
                    <React.Fragment key={loc.id}>
                        <Marker position={[loc.lat, loc.lng]} icon={icon}>
                            <Tooltip direction="top" offset={[0, -20]} opacity={1} permanent>
                                {loc.salesCount}
                            </Tooltip>
                        </Marker>

                        {!isCenter && (
                            <Polyline
                                positions={[defaultCenter, [loc.lat, loc.lng]]}
                                color="#0061FF"
                                weight={2}
                                opacity={0.8}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </MapContainer>
    );
}
