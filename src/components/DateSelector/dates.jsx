import React from 'react';
import calendar, { THIS_MONTH } from '../helpers/calendar.js';
import { DateCell } from './styles.js';

function Dates(props) {
  let counter = 0;
  let rows = [...Array(7).keys()];
  let weekDays = 7;

  return rows.map((row, index) => {
    if (row > 0) { counter = counter + weekDays }
    let rowStart = counter;
    let rowEnd = counter + weekDays;

    let rowCells = calendar().slice(rowStart, rowEnd);

    return(
      <div key={index}>
        {rowCells.map((date, index) => {
          let color = 'black';

          if (THIS_MONTH != Number(date[1][1])) { color = 'grey' }
          if (date[2][0] === '0') { date[2] = date[2].replace(/0/gi, '') }

          return (
            <DateCell key={index} textColor={color}>
              {date[2]}
            </DateCell>
          );
        })}
      </div>
    );
  });
}

export default Dates;