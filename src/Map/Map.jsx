import { useState, useCallback } from 'react';
import { companies } from '../Organizations/companies';
import {
    GoogleMap,
    useJsApiLoader,
    Marker
} from "@react-google-maps/api";
import './map.css';
import env from 'react-dotenv';

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: env.GOOGLE_API_KEY,
    });

    const containerStyle = {
        width: '40vw',
        height: '70vh'
    };

    const center = {
        lat: 48.46906364897231,
        lng: 35.050931474231955
    };


    const [, setMap] = useState(null);

    const onUnMount = useCallback((map) => {
        setMap(null);
    }, []);
    return isLoaded ? (
        <section className="containerGoogleMap">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={13}
                onUnmount={onUnMount}
            >
                {Object.entries(companies).map(marker => {
                    return <Marker key={marker[1].href.toString()} position={{ lat: marker[1].lat, lng: marker[1].lng }} />
                })}
            </GoogleMap></section >) : <></>
}
export default Map;