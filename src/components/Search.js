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

class Search extends Component{

  state = {
    query: ''
  };

 updateQuery = (query) => {
    this.setState({
      query: query
    });
   this.props.setMarkerQuery(query);
   this.props.updateFilteredPlaces(query)
 }


}