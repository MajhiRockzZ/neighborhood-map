import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-map';

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.zoom}
    defaultCenter={props.center}>
  </GoogleMap>
));
