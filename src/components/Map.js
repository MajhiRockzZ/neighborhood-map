import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-map';
import Marker from './Marker';

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}>

    {props.filteredPlaces.map((place) => {
      return (
        <Marker
          key={place.title}
          title={place.title}
          position={place.location}
          setClicked={props.setClicked}
          setCurrentPlace={props.setCurrentPlace}
          currentPlace={props.currentPlace}
          resetFilterdPlaces={props.resetFilteredPlaces}
          forStreetView={place.forStreetView}
          animationConstant={props.animationConstant}
        />
      );
    })}
  </GoogleMap>
));

export default Map;