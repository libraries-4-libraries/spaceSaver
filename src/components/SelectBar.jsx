import React from "react";
import moment from "moment";
import {
  SelectWrap,
  DateSelectorWrapper,
  Input
} from './styledComponents.jsx';

import LocationDropdown from './LocationDropdown.jsx';

class SelectBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM Do YYYY')
    }
  }

  componentDidMount() {
    console.log('SelectBar mounted')
  }

  render() {
    return (
      <SelectWrap>
        <LocationDropdown/>
        <DateSelectorWrapper>
          <Input type="date"/>
        </DateSelectorWrapper>
      </SelectWrap>
    );
  }
}

export default SelectBar;