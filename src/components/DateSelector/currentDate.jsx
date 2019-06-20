import React from 'react';
import moment from "moment";

import { connect } from 'react-redux'
import { setDate } from '../../actions'

import onClickOutside from "react-onclickoutside";
import calendar, { THIS_YEAR, THIS_MONTH, WEEK_DAYS, CALENDAR_MONTHS } from '../helpers/calendar.js';
import { DateSelectorWrapper, CurrentMonthLayout, WeekdayCell, DateCell, Calendar, MonthBar } from './styles.js';

class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOpen: false,
      date: moment().format('MMMM Do YYYY'),
      monthNumber: THIS_MONTH,
      monthName: Object.keys(CALENDAR_MONTHS)[THIS_MONTH - 1],
      currentMonthSelected: true,
      monthBarContent: `${Object.keys(CALENDAR_MONTHS)[THIS_MONTH - 1]} >`
    }

    this.onClick = this.onClick.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.selectMonth = this.selectMonth.bind(this);
    this.renderDates = this.renderDates.bind(this);
  }

  handleClickOutside(e) {
    this.setState({ listOpen: false });
  }

  onClick() {
    this.toggleList();
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  selectDate(e) {
    let {date, monthName } = this.state;
    let year = THIS_YEAR;
    let selection = e.currentTarget.textContent;
    let notElevenCheck = !(selection[0] === '1');

    if (selection === '1' || (notElevenCheck && selection[1] === '1')) {
      selection = selection + 'st';
    } else if (selection === '2' || (notElevenCheck && selection[1] === '2')) {
      selection = selection + 'nd';
    } else if (selection === '3' || (notElevenCheck && selection[1] === '3')) {
      selection = selection + 'rd';
    } else {
      selection = selection + 'th';
    }

    if (THIS_MONTH === 12) { year = year + 1 }

    date = `${monthName} ${selection} ${year}`;

    //convert date from string to moment object before storing
    let formattedDate = moment(date, 'MMMM Do YYYY')
    this.props.dispatch(setDate(formattedDate))

    this.setState({ date, listOpen: false });
  }

  selectMonth() {
    if (this.state.currentMonthSelected) {
      let monthNumber = THIS_MONTH + 1;
      let monthName = Object.keys(CALENDAR_MONTHS)[monthNumber - 1];
      let monthBarContent = `< ${monthName}`
      let currentMonthSelected = false;
      this.setState({ monthNumber, monthName, monthBarContent, currentMonthSelected });
    } else {
      let monthNumber = THIS_MONTH;
      let monthName = Object.keys(CALENDAR_MONTHS)[monthNumber - 1];
      let monthBarContent = `${monthName} >`
      let currentMonthSelected = true;
      this.setState({ monthNumber, monthName, monthBarContent, currentMonthSelected });
    }
  }


  renderDates(month) {

    let rows = [...Array(7).keys()];
    let weekDays = 7;
    let counter = 0;

    return rows.map((row, index) => {
      if (row > 0) { counter = counter + weekDays }
      let rowStart = counter;
      let rowEnd = counter + weekDays;

      let rowCells = calendar(month).slice(rowStart, rowEnd);

      return (
        <div key={index}>
          {rowCells.map((dateInfo, index) => {
            let color = 'black';
            let selectorFunction = this.selectDate

            let prevNextTest = !(month === Number(dateInfo[1][1]));
            let currentDayTest = (!prevNextTest && dateInfo[2] === moment().format('Do').slice(0, 2));
            let replaceZeroTest = (dateInfo[2][0] === '0')

            if (this.state.monthName != Object.keys(CALENDAR_MONTHS)[THIS_MONTH - 1]) { currentDayTest = false }

            if (prevNextTest) { color = 'grey'; selectorFunction = null; }
            if (currentDayTest) { color = 'blue' }
            if (replaceZeroTest) { dateInfo[2] = dateInfo[2].replace(/0/gi, '') }

            return (
              <DateCell key={index} textColor={color} onClick={selectorFunction}>
                {dateInfo[2]}
              </DateCell>
            );
          })}
        </div>
      );
    });
  }


  render() {
    const { listOpen, monthNumber, monthBarContent } = this.state;

    if (!listOpen) {
      return (
        <DateSelectorWrapper onClick={this.onClick}>
          {`${this.state.date} >`}
        </DateSelectorWrapper>
      );
    } else {
      return (
        <Calendar>
        <CurrentMonthLayout>
            <MonthBar onClick={this.selectMonth}>{monthBarContent}</MonthBar>
          {Object.values(WEEK_DAYS).map((day, index) => {
            return (
              <WeekdayCell key={index}>{day}</WeekdayCell>
            );
          })}
          {this.renderDates(monthNumber)}
        </CurrentMonthLayout>
        </Calendar>
      );
    }

  }
}

export default connect()(onClickOutside(CurrentDate));