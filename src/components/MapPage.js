import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 47.6205063,
    lng: -122.1807342
};

const MapPage = () => {
    return (
        <div>
            <div style={{ height: '400px', width: '100%' }}>
                <LoadScript googleMapsApiKey="AIzaSyCAN8tXXNGquqswmAuBqoPxVNUsATnbHSA">
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        center={center}
                        zoom={14}
                    />
                </LoadScript>
            </div>
        </div>
    );
}

export default MapPage;











