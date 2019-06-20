import React from "react";
import Cell from "./Cell.jsx";
import moment from "moment";
<<<<<<< HEAD
=======
//import Grid from "@material-ui/core/Grid"
import { RoomCell } from './styledComponents.jsx';
>>>>>>> 6b4cc377714cee7203afce892d2259304b4929b1

import { createSelectable, SelectableGroup } from "react-selectable";
import { RoomCell } from './styledComponents.jsx';

const SelectableCell = createSelectable(Cell);

function RoomDisplay(props) {
  let hours = [];
  let bgColor = '#CAFFB9';

  hours.push(['#66A182', props.roomName, null, null, 'left'])
  for (var i = 0; i <= props.duration; i++) {
    let hour = moment(props.startTime);
    let text = 'available';
    let booked = false;
    let align = 'center'
    props.currentBookings.forEach((booking) => {
      let time = moment(booking.startTime);
      //console.log('hours compare', time.hours, hour.hours)
      if (time.hours() === hour.hours()) {
        text = booking.name
        booked = true;
      }
    })
    hours.push([bgColor, text, booked, hour.toISOString(), align]);

    props.startTime.add(15, "minutes");
  }

  return (
    <RoomCell>
<<<<<<< HEAD
       <SelectableGroup
          onSelection={keys => {
            console.log("these have been selected:", keys);
          }}
      >
        {hours.map((item, index) => {
          return <SelectableCell selectableKey={item} key={index} color={item[0]} text={item[1]} booked={item[2]} time={item[3]} room={props.roomName} align={item[4]} />;
        })}
      </SelectableGroup>
=======
      {hours.map(item => {
        return <Cell color={item[0]} text={item[1]} booked={item[2]} time={item[3]} room={props.roomName} align={item[4]} />;
      })}
>>>>>>> 6b4cc377714cee7203afce892d2259304b4929b1
    </RoomCell>
  );
}

export default RoomDisplay;