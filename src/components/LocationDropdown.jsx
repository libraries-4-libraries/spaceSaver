import React from "react";
import onClickOutside from "react-onclickoutside";
import { formatLocations } from './helpers.js';

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
  }

  handleClickOutside() {
    console.log('handleOutside clicked')
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  renderList(listOpen, locations) {
    if (listOpen) {
      return (
        <div>
          <ul>
            {locations.map((item, index) => <li key={index}>{item.title}</li>)}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  onClick() {
    console.log('Location Menu Clicked!')
    //console.log(JSON.stringify(this.state.locations))
    this.toggleList();
  }

  render() {
    const { listOpen, locations, headerTitle } = this.state;
    return (
      <div onClick={this.onClick}>
        {headerTitle}
        {listOpen ? ">" : "<"}
        {this.renderList(listOpen, locations)}
      </div>
    );
  }
}

//export default LocationDropdown;
export default onClickOutside(LocationDropdown);
