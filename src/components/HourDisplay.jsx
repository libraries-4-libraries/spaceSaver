import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
import { HourCell } from './styles.jsx';



function HourDisplay(props) {
  let hours = [];

  let bgColor = '#66A182';
  hours.push({color: bgColor, text: '--'})
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    let hourCellObject = {
      color: bgColor,
      text: hour.format("h:mm A"),
      align: 'center',
    }
    hours.push(hourCellObject);
    props.startTime.add(15, "minutes");
  }

  return (
    <HourCell>
      {hours.map((item, index) => {
        return <Cell key={index} cellObject={item} />;
      })}
    </HourCell>
  );
}

export default HourDisplay;