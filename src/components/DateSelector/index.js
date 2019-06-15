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

  componentDidMount() {
    console.log('Date Selector mounted');
  }

  render() {
    const { listOpen } = this.state;

    return (
      <div onClick={this.onClick}>
        <CurrentMonth open={listOpen} />
      </div>
    );
  }
}

export default onClickOutside(DateSelector);

//{listOpen ? " <" : " >"}
