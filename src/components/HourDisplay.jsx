import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
<<<<<<< HEAD

import { HourCell } from './styledComponents.jsx';


=======
//import Grid from "@material-ui/core/Grid";
import { HourCell } from './styledComponents.jsx';
>>>>>>> 6b4cc377714cee7203afce892d2259304b4929b1

function HourDisplay(props) {
  let hours = [];

  let bgColor = '#66A182';
  hours.push([bgColor, '--'])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    hours.push([bgColor, hour.format("h:mm A")]);
    props.startTime.add(15, "minutes");
  }

  return (
<<<<<<< HEAD
    <HourCell>
      {hours.map((item, index) => {
        return <Cell key={index} color={item[0]} text={item[1]} align={'center'} booked={null} />;
      })}
    </HourCell>
=======
      <HourCell>
        {hours.map(item => {
          return <Cell color={item[0]} text={item[1]} align={'center'} booked={null} />;
        })}
      </HourCell>
>>>>>>> 6b4cc377714cee7203afce892d2259304b4929b1
  );
}

export default HourDisplay;