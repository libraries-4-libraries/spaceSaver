import React from 'react';
import moment from "moment";
import calendar, { THIS_MONTH, WEEK_DAYS, CALENDAR_MONTHS } from '../helpers/calendar.js';
import { DateSelectorWrapper, CurrentMonthLayout, WeekdayCell, DateCell, Calendar, MonthBar } from './styles.js';

class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('MMMM Do YYYY'),
      monthNumber: THIS_MONTH,
      monthName: Object.keys(CALENDAR_MONTHS)[THIS_MONTH - 1]
    }

    this.selectDate = this.selectDate.bind(this);
    this.renderDates = this.renderDates.bind(this);
  }

  componentDidMount(){
    // console.log(this.state.currentMonthNumber);
    // console.log(this.state.currentMonthName);
  }

  selectDate(e) {

    let date = this.state.date;
    let selection = e.currentTarget.textContent;

    if (selection === '1' || selection[1] === '1') {
      selection = selection + 'st';
    } else if (selection === '2' || selection[1] === '2') {
      selection = selection + 'nd';
    } else if (selection === '3' || selection[1] === '3') {
      selection = selection + 'rd';
    } else {
      selection = selection + 'th';
    }

    date = moment().format(`MMMM [${selection}] YYYY`);
    this.setState({ date });
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
    const { monthNumber } = this.state;

    if (!this.props.open) {
      return (
        <DateSelectorWrapper>
          {`${this.state.date} >`}
        </DateSelectorWrapper>
      );
    } else {
      return (
        <Calendar>
        <CurrentMonthLayout>
            <MonthBar>{`${this.state.monthName} >`}</MonthBar>
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

export default CurrentDate;