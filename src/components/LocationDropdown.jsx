import React from "react";
import onClickOutside from "react-onclickoutside";
import { formatLocations } from './helpers/locations.js';
import { LocationSelectorWrapper, LocationItem } from './styledComponents.jsx';

const locationsMock = [
  'Walnut Creek Library',
  'Brentwood Library',
  'Orinda Library',
  'Lafayette Library',
  'San Ramon Library',
  'Doughtery Station',
  'Rivendell'
];

class LocationDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      headerTitle: 'Select Location',
      locations: formatLocations(locationsMock)
    }
    this.onClick = this.onClick.bind(this);
    this.selectLocation = this.selectLocation.bind(this);
  }

  handleClickOutside() {
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  selectLocation(e) {
    this.setState({ headerTitle: e.currentTarget.textContent });
  }

  renderList(listOpen, locations) {
    if (listOpen) {
      return locations.map((item, index) => {
        return (
          <LocationItem key={index} onClick={this.selectLocation}>
            {item.title}
          </LocationItem>
        );
      });
    } else {
      return null;
    }
  }

  onClick() {
    this.toggleList();
  }

  render() {
    const { listOpen, locations, headerTitle } = this.state;
    return (
      <LocationSelectorWrapper onClick={this.onClick}>
        {headerTitle}
        {listOpen ? " <" : " >"}
        {this.renderList(listOpen, locations)}
      </LocationSelectorWrapper>
    );
  }
}

export default onClickOutside(LocationDropdown);
