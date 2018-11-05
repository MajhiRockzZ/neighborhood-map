import React, {Component} from 'react'
import MyMap from './MyMap'
import Search from './Search'
import InfoTab from './InfoTab'
import '../App.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import escapeRegExp from 'escape-string-regexp'
import {GOOGLE_MAP_API_KEY} from '../api/APIkey'

class App extends Component {
  state = {
    placesList: [
      {
        title: "JD Hi Street Mall",
        placeType: "shopping_mall",
        location: {lat: 23.357947, lng: 85.324898},
        forStreetView: {lat: 23.357947, lng: 85.324898}
      },
      {
        title: "Fun Cinema",
        placeType: "movie_theater",
        location: {lat: 23.333093, lng: 85.317121},
        forStreetView: {lat: 23.333093, lng: 85.317121}
      },
      {
        title: "JSCA International Stadium Complex",
        placeType: "point_of_interest",
        location: {lat: 23.310201, lng: 85.274835},
        forStreetView: {lat: 23.310201, lng: 85.274835}
      },
      {
        title: "Kaveri",
        placeType: "food",
        location: {lat: 23.375153, lng: 85.335574},
        forStreetView: {lat: 23.375153, lng: 85.335574}
      },
      {
        title: "Ranchi Lake",
        placeType: "natural_feature",
        location: {lat: 23.368364, lng: 85.318145},
        forStreetView: {lat: 23.368364, lng: 85.318145}
      },
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

  setMarkerQuery(newQuery) {
    this.setState({
      filterQuery: newQuery,
    })
  }

  setCurrentPlace(name) {
    this.setState({
      currentPlace: name,
    })
  }


  setAnimationConstant(animationType) {
    this.setState({
      animationConstant: animationType,
    })
  }

  resetFilteredPlaces() {
    this.setState({
      filteredPlaces: this.state.placesList
    })
  }

  updateFilteredPlaces(query) {
    const match = new RegExp(escapeRegExp(query), 'i');
    this.setState({
      filteredPlaces: this.state.placesList.filter((place) => match.test(place.title))
    })
  }

  render() {
    const api = 'https://maps.googleapis.com/maps/api/js?key=' + GOOGLE_MAP_API_KEY + '&v=3.exp&libraries=geometry,drawing,places';
    return (
      <MuiThemeProvider>
        <div role="Application">
          <header className="welcome-sign">
            <div className="page-banner" role="banner">Ranchi - The heart of Jharkhand</div>
          </header>
          <main className="app-format">
            {!this.state.itemClicked &&
            <form className="search-order">
              <Search
                placesList={this.state.placesList}
                setCurrentPlace={this.setCurrentPlace.bind(this)}
                setClicked={this.setClicked.bind(this)}
                setMarkerQuery={this.setMarkerQuery.bind(this)}
                setAnimationConstant={this.setAnimationConstant.bind(this)}
                updateFilteredPlaces={this.updateFilteredPlaces.bind(this)}
              />
            </form>}
            {this.state.itemClicked &&
            <div role="Contentinfo" className="info-tab-order">
              <InfoTab
                setClicked={this.setClicked.bind(this)}
                resetFilteredPlaces={this.resetFilteredPlaces.bind(this)}
                currentPlace={this.state.currentPlace}/>
            </div>}
            <MyMap
              googleMapURL={api}
              loadingElement={<div style={{height: `100%`, margin: `auto`, fontSize: `28px`}}>The map view is
                loading.</div>}
              containerElement={<div className="map-order"/>}
              mapElement={<div style={{height: `100%`}}/>}
              center={{lat: 23.357947, lng: 85.324898}}
              zoom={14}
              filteredPlaces={this.state.filteredPlaces}
              setClicked={this.setClicked.bind(this)}
              setCurrentPlace={this.setCurrentPlace.bind(this)}
              currentPlace={this.state.currentPlace}
              resetFilteredPlaces={this.resetFilteredPlaces.bind(this)}
              animationConstant={this.state.animationConstant}
            />
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
