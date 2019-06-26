import React from "react";
import Cell from "./Cell.jsx";

import { RoomCell } from './styles.jsx';

import moment from "moment";

import { connect } from 'react-redux'
import { setTime, setRoom } from '../actions'


import { createSelectable, SelectableGroup } from "react-selectable";
import { validateBookingLength } from './helpers/validators.js'

import BookingFormDialog from "./ReservationConfirmationDialog.jsx";

const SelectableCell = createSelectable(Cell);


function RoomDisplay(props) {
  //controls for dialog
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  //create and populate room schedule
  let hours = [];
  let bgColor = '#CAFFB9';
  let roomNameCellObject = {
    color: '#66A182',
    text: props.roomName,
    align: 'left'
  }
  hours.push(roomNameCellObject)

  for (var i = 0; i <= props.duration; i++) {
    let cellObject = {
      color: bgColor,
      text: 'available',
      booked: false,
      hour: moment(props.startTime),
      room: props.roomName,
      align: 'center'
    }

    props.currentBookings.forEach((booking) => {
      let time = moment(booking.startTime);
      if (time.hours() === cellObject.hour.hours()) {
        cellObject.text = booking.name
        cellObject.booked = true;
      }
    });
    hours.push(cellObject);

    props.startTime.add(15, "minutes");
  }

  return (
    <RoomCell>
       <SelectableGroup
          onSelection={keys => {
            let s = keys[0]
            let e = keys[keys.length-1]
            console.log("these have been selected:", keys);
            props.dispatch(setTime({start: s.hour, end: e.hour}));
            props.dispatch(setRoom(s.room))
            //console.log('booking length', validateBookingLength(keys, 120))
            handleClickOpen()
          }}
      >
        {hours.map((item, index) => {
          return <SelectableCell
          selectableKey={item}
          key={index}
          cellObject={item}
           />;
        })}
      </SelectableGroup>
      <BookingFormDialog open={open} handleClose={handleClose}/>
    </RoomCell>
  );
}

export default connect()(RoomDisplay);