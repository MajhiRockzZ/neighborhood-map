import React, { Component } from 'react';
import '../App.css';

class App extends Component {
  state = {
    placeList: [
      { title: "Bhagwan Birsa Biological Park", placeType: "park", location: {lat:23.46318 , lng: 85.455203 }, forStreetView: {lat:23.46318 , lng: 85.455203 }},
      { title: "Ranchi Lake", placeType: "natural_feature", location: {lat: 23.368364 , lng: 85.318145 }, forStreetView: {lat: 23.368364 , lng: 85.318145 }},
      { title: "Ranchi Science Centre", placeType: "museum", location: {lat: 23.406945, lng: 85.340316 }, forStreetView: {lat: 23.406945, lng: 85.340316 }},
      { title: "Shree Krishna Singh Park", placeType: "park", location: {lat: 23.336656, lng: 85.319276 }, forStreetView: {lat: 23.336656, lng: 85.319276 }},
      { title: "Baheya Waterfall", placeType: "point_of_interest", location: {lat: 23.362652,lng: 85.491187 }, forStreetView: {lat: 23.362652,lng: 85.491187 }}
    ],
    filterQuery: '',
    imageSrc: '',
    itemClicked: false,
    currentPlace: '',
    filteredPlaces: [],
    animationConstant: 0,
  };

  componentDidMount() {
    this.resetFilteredPlaces()
  }

  setClicked(status) {
    this.setState({
      itemClicked: status,
    })
  }

  setCurrentPlace(name) {
    this.setState({
      currentPlace: name,
    })
  }

  resetFilteredPlaces() {
    this.setState({
      filteredPlaces: this.state.placeList
    })
  }
}

export default App;
