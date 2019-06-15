import React from "react";
import DateSelector from './DateSelector';
import { SelectWrap } from './styledComponents.jsx';
import LocationDropdown from './LocationDropdown.jsx';

class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log('SelectBar mounted')
  }

  render() {
    return (
      <SelectWrap>
        <LocationDropdown />
        <DateSelector />
      </SelectWrap>
    );
  }
}

export default SelectBar;