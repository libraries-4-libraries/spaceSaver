import React from "react";
import moment from "moment";
import { SelectWrap } from './styledComponents.jsx';


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
      <SelectWrap>{this.state.date}</SelectWrap>
    );
  }
}

export default SelectBar;
