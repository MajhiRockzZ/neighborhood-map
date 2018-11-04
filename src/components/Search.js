import React, {Component} from 'react'
import {List, ListItem} from 'material-ui/List'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Restaurant from 'material-ui/svg-icons/maps/restaurant'
import LocalLibrary from 'material-ui/svg-icons/maps/local-library'
import LocalCafe from 'material-ui/svg-icons/maps/local-cafe'
import LocalGroceryStore from 'material-ui/svg-icons/maps/local-grocery-store'
import BeachAccess from 'material-ui/svg-icons/places/beach-access'
import Cake from 'material-ui/svg-icons/social/cake'
import School from 'material-ui/svg-icons/social/school'

class Search extends Component {
  state = {
    query: '',
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.props.setMarkerQuery(query)
    this.props.updateFilteredPlaces(query)
  }

  render() {
    let showingPlaces
    let {query} = this.state
    let {placesList} = this.props
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingPlaces = placesList.filter((place) => match.test(place.title))
    } else {
      showingPlaces = placesList
    }
    showingPlaces.sort(sortBy('title'))
    return (
      <div role="Menu" className="search-format">
        <input
          className='search-locations'
          type='text'
          placeholder='Search'
          value={query}
          id="searchEntry"
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        <List className="list-style">
          {showingPlaces.map((place) => {
            let optionalIcon
            if (place.placeType === 'restaurant') {
              optionalIcon = <Restaurant/>
            } else if (place.placeType === 'books') {
              optionalIcon = <LocalLibrary/>
            } else if (place.placeType === 'cafe') {
              optionalIcon = <LocalCafe/>
            } else if (place.placeType === 'grocery store') {
              optionalIcon = <LocalGroceryStore/>
            } else if (place.placeType === 'beach') {
              optionalIcon = <BeachAccess/>
            } else if (place.placeType === 'cake') {
              optionalIcon = <Cake/>
            } else if (place.placeType === 'school') {
              optionalIcon = <School/>
            } else if (place.placeType === 'bakery') {
              optionalIcon = <Cake/>
            }
            return (
              <ListItem
                key={place.title}
                tabIndex={0}
                role="Menuitem"
                primaryText={place.title}
                rightIcon={optionalIcon}
                onClick={() => {
                  this.props.setAnimationConstant(1)
                  setTimeout(() => this.props.setAnimationConstant(0), 2000)
                  this.props.setCurrentPlace(place.title)
                  this.props.setClicked(true)
                }}
              />
            )
          })}
        </List>
      </div>
    )
  }
}

export default Search;
