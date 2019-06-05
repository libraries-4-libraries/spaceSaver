import React from "react";
import moment from "moment";
import {
  SelectWrap,
  DateSelectorWrapper,
  LocationSelectorWrapper,
  Input
} from './styledComponents.jsx';

import LocationDropdown from './LocationDropdown.jsx';

class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM Do YYYY'),
      locations: [
        'Walnut Creek Library',
        'Brentwood Library',
        'Orinda Library',
        'Lafayette Library',
        'San Ramon Library',
        'Doughtery Station',
        'Rivendell'
      ]
    }
    this.displayLocations = this.displayLocations.bind(this);
  }

  componentDidMount() {
    console.log('SelectBar mounted')
  }

  displayLocations() {
    return this.state.locations.map((location, index) => {
      return <option key={index} value={location}>{location}</option>
    })
  }

  render() {
    return (
      <SelectWrap>
        <LocationDropdown/>
        <DateSelectorWrapper>{this.state.date}</DateSelectorWrapper>
      </SelectWrap>
    );
  }
}

export default SelectBar;

// old code -- basic HTML dropdown
// <LocationSelectorWrapper>
//   <LocationSelector>
//     {this.displayLocations()}
//   </LocationSelector>
// </LocationSelectorWrapper>

//<Input type="date" />
