import React from 'react';
import Dates from './dates.jsx';
import { WEEK_DAYS } from '../helpers/calendar.js';
import { WeekdayBar, WeekdayCell } from './styles.js';

function CurrentMonth(props) {
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

export default CurrentMonth;