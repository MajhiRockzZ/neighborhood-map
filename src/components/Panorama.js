import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap, StreetViewPanorama} from 'react-google-maps';
import {compose, withProps} from 'recompose';
import {GOOGLE_MAP_API_KEY} from "../api/APIkey";

const Panorama = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + GOOGLE_MAP_API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    mapElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{width: `300px`, height: `280px`}}/>
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap defaultZoom={8} defaultCenter={props.position}>
    <StreetViewPanorama defaultPosition={props.forStreetView} visible={}/>
  </GoogleMap>
);

export default Panorama;