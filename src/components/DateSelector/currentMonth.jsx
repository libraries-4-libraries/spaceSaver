import React from 'react';
import moment from "moment";
import Dates from './dates.jsx';
import { WEEK_DAYS } from '../helpers/calendar.js';
import { DateSelectorWrapper, WeekdayBar, WeekdayCell } from './styles.js';

function CurrentMonth(props) {
  if (!props.open) {
    return (
      <DateSelectorWrapper>
        {moment().format('MMMM Do YYYY')}
      </DateSelectorWrapper>
    );
  } else {
    return (
      <WeekdayBar>
        {Object.values(WEEK_DAYS).map((day, index) => {
          return (
            <WeekdayCell key={index}>{day}</WeekdayCell>
          );
        })}
        <Dates />
      </WeekdayBar>
    );
  }

  // return (
  //   <WeekdayBar>
  //     {Object.values(WEEK_DAYS).map((day, index) => {
  //       return (
  //         <WeekdayCell key={index}>{day}</WeekdayCell>
  //       );
  //     })}
  //     <Dates />
  //   </WeekdayBar>
  // );
}

export default CurrentMonth;