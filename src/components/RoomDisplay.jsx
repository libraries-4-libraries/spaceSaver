import React from "react";
import Cell from "./Cell.jsx";

import { RoomCell } from './styles.jsx';

import moment from "moment";

import { connect } from 'react-redux'
import { setTime, setRoom } from '../actions'


import { createSelectable, SelectableGroup } from "react-selectable";
import { validateBookingLength } from './helpers/validators.js'
import BookingFormDialog from "./ReservationConfirmationDialog.jsx";

import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyCKJHJ1s2zVHQikU_VL25DNc7Unw1qWLPY",
  authDomain: "space-saver-8dec0.firebaseapp.com",
  databaseURL: "https://space-saver-8dec0.firebaseio.com",
  projectId: "space-saver-8dec0",
  storageBucket: "space-saver-8dec0.appspot.com",
  messagingSenderId: "663245260208",
  appId: "1:663245260208:web:6b67ed79499b33b9"
};
firebase.initializeApp(config);
const db = firebase.database();

const SelectableCell = createSelectable(Cell);


function RoomDisplay(props) {
  //controls for dialog
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    const hours = moment.duration(props.time.end.diff(props.time.start));
    const duration = hours.asHours();
    const startTime = moment(props.time.start).toISOString();
    const roomBooking = db.ref('bookings/' + props.name);
    roomBooking.set({
      room: props.roomName,
      startTime,
      duration,
      name: props.name,
      email: props.email,
      party: 1
    });
    setOpen(false);
    //BUG ON RERENDER ONLY WHOLE NUMBERS ARE BEING SHOWN AS BLOCKED OFF
  }

  //create and populate room schedule
  let hours = [];
  let bgColor = '#CAFFB9';
  let roomNameCellObject = {
    color: '#66A182',
    text: props.ownProps.roomName,
    align: 'left'
  }
  hours.push(roomNameCellObject)

  for (var i = 0; i <= props.ownProps.duration; i++) {
    let cellObject = {
      color: bgColor,
      text: 'available',
      booked: false,
      hour: moment(props.ownProps.startTime),
      room: props.ownProps.roomName,
      align: 'center'
    }

    props.ownProps.currentBookings.forEach((booking) => {
      let time = moment(booking.startTime);
      if (time.hours() === cellObject.hour.hours()) {
        cellObject.text = booking.name
        cellObject.booked = true;
      }
    });
    hours.push(cellObject);

    props.ownProps.startTime.add(15, "minutes");
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

function mapStateToProps(state, ownProps){
  return {
    time: state.time,
    date: state.setDate,
    name: state.name,
    email: state.email,
    ownProps
  }
}

export default connect(mapStateToProps)(RoomDisplay);