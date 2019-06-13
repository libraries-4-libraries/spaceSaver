import React from "react";
import moment from "moment";
import onClickOutside from "react-onclickoutside";

import calendar, { WEEK_DAYS, THIS_MONTH, getMonthFirstDay } from './helpers/calendar.js';

import { DateSelectorWrapper, MonthBar, WeekdayBar, WeekdayCell } from './styledComponents.jsx';

class Calendar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM Do YYYY'),
      listOpen: false
    }

    this.onClick = this.onClick.bind(this);
    this.renderDates = this.renderDates.bind(this);
  }

  handleClickOutside() {
    this.setState({ listOpen: false });
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  onClick() {
    this.toggleList();
  }

  renderDates() {
    let vert = [...Array(7).keys()];
    let horiz = 7;
    let counter = 0

    console.log('Current month first day: ' + getMonthFirstDay())

    return vert.map((row, index) => {
      if (row > 0) { counter = counter + horiz }
      let x = counter;
      let n = counter + horiz;
      let rowCells = calendar().slice(x, n)
      return (
        <div key={index}>
          {rowCells.map((date, index) => {
            return (
              <WeekdayCell key={index}>
                {date[2]}
              </WeekdayCell>
            )
          })}
        </div>
      );
    })
  }

  renderList(listOpen) {
    if (listOpen) {
      console.log('Current month: ' + moment().format('MMMM'));
      console.log(calendar());
      return (
        <MonthBar>
        {moment().format('MMMM')}
        <WeekdayBar>
          {Object.values(WEEK_DAYS).map((day, index) => {
            return (
              <WeekdayCell key={index}>
                {day}
              </WeekdayCell>
            );
          })}
          {this.renderDates()}
        </WeekdayBar>
        </MonthBar>
      );

    }
    // if (listOpen) {
    //   return locations.map((item, index) => {
    //     return (
    //       <LocationItem key={index} onClick={this.selectLocation}>
    //         {item.title}
    //       </LocationItem>
    //     );
    //   });
    // } else {
    //   return null;
    // }
  }

  componentDidMount() {
    console.log('Calendar mounted')
  }

  render() {
    return (
      <DateSelectorWrapper onClick={this.onClick}>
        {this.state.date}
        { this.state.listOpen ? " <": " >" }
        {this.renderList(this.state.listOpen)}
      </DateSelectorWrapper>
    );
  }
}

export default onClickOutside(Calendar);
