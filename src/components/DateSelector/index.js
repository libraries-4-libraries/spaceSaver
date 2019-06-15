import React from "react";
import moment from "moment";
import onClickOutside from "react-onclickoutside";
import CurrentMonth from './currentMonth.jsx';
import { DateSelectorWrapper } from './styles.js';

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM Do YYYY'),
      listOpen: false,
    }

    this.onClick = this.onClick.bind(this);
  }

  handleClickOutside(e) {
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  onClick() {
    this.toggleList();
  }

  renderList(listOpen) {
    if (listOpen) {
      return (
        <CurrentMonth />
      );
    }
  }

  componentDidMount() {
    console.log('Date Selector mounted');
  }

  render() {
    const {date, listOpen} = this.state;

    return (
      <DateSelectorWrapper onClick={this.onClick}>
        {date}
        {listOpen ? " <" : " >"}
        {this.renderList(listOpen)}
      </DateSelectorWrapper>
    );
  }
}

export default onClickOutside(DateSelector);
