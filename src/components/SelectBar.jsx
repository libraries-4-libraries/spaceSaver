import React from "react";
import DateSelector from './DateSelector';
import LocationDropdown from './LocationDropdown.jsx';
import { SelectWrap } from './styles.jsx';

class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
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