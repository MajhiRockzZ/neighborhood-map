import React from 'react'
import MyMarker from './MyMarker'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'

const MyMap = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}
  >
    {props.filteredPlaces.map((place) => {
      return (
        <MyMarker
          key={place.title}
          title={place.title}
          position={place.location}
          setClicked={props.setClicked}
          setCurrentPlace={props.setCurrentPlace}
          currentPlace={props.currentPlace}
          resetFilteredPlaces={props.resetFilteredPlaces}
          forStreetView={place.forStreetView}
          animationConstant={props.animationConstant}
        />
      )
    })}
  </GoogleMap>
))

export default MyMap;
