import React from "react";
import './map.css'
import ReactMapGL from 'react-map-gl';

const Map = () => {

    const [viewport, setViewport] = React.useState({
    });

    return (
        <div>
            <section className="mapbox">
            <ReactMapGL
                mapboxAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
                {...viewport}
                mapStyle={"mapbox://styles/oleh3003/clfssgmd0002c01lfiq7z5res"}
                onViewportChange={viewport => setViewport(viewport)}/>
                </section>
        </div>
    )
}

export default Map
