import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-maps';

class Marker extends Component {
  state = {
    isOpen: false,
    animationConstant: 0,
  }

  onToggleOpen = () => {
    if (this.state.isOpen && (this.props.title === this.props.currentPlaces)) {
      this.props.setClicked(false)
      this.props.setCurrentPlace('')
      this.props.resetFilteredPlace()
    } else if (!this.state.isOpen) {
      this.props.setClicked(false)
      this.props.setCurrentPlace(this.props.title)
      this.props.setClicked(true)
    }
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }
}
