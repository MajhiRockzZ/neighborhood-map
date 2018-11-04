import React, {Component} from 'react';
import {Marker, InfoWindow} from 'react-google-map';

class Marker extends Component {
  state = {
    isOpen: false,
    animationConstant: 0,
  };

  onToggleOpen = () => {
    if (this.state.isOpen && (this.props.title === this.props.currentPlaces)) {
      this.props.setClicked(false)
      this.props.setCurrentPlace('')
      this.props.resetFilteredPlaces()
    } else if (!this.state.isOpen) {
      this.props.setClicked(false)
      this.props.setCurrentPlace(this.props.title)
      this.props.setClicked(true)
    }
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen
    }))
  }

  render() {
    return (
      <Marker
        key={this.props.title}
        title={this.props.title}
        position={this.props.position}
        onClick={this.onToggleOpen}
        animation={(this.props.title === this.props.currentPlace) ? this.props.animationConstant : 0}
      >
        {this.state.isOpen &&
        <InfoWindow onCloseClick={this.onToggleOpen}>
          <div role="Complementary" style={{width: `300px`, height: `300px`}}>
            <div role="Banner" className="marker-title-style"><b>{this.props.title}</b></div>
          </div>
        </InfoWindow>}
      </Marker>
    )
  }
}

export default Marker
