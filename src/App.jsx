import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'

import moment from 'moment';

import HourDisplay from './components/HourDisplay.jsx'
import RoomDisplay from './components/RoomDisplay.jsx'
import SelectBar from './components/SelectBar.jsx';
import { AppWrap, GlobalStyle } from './components/styles.jsx';

import {setLibrary, addBooking, addMultipleBookings} from "./actions"

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const bookingsURL = 'http://localhost:3838/bookings'
const roomsURL = 'http://localhost:3838/rooms'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      rooms: []
    }
  }

  componentDidMount() {
    fetch(bookingsURL).then((res) => {
      res.json().then((data) => {
        this.setState({
          bookings: data
        })
        data.forEach(item => {store.dispatch(addBooking(item))})
      })
    })
    fetch(roomsURL).then((res) => {
      res.json().then((data) => {
        this.setState({
          rooms: data
        })
      })
    })
  }

  generateRooms() {
    return this.state.rooms.map((room, index) => {
      let roomBookings = [];
      this.state.bookings.forEach((booking) => {
        if (booking.room === room.name) {
          roomBookings.push(booking);
        }
      })
      return (
        <RoomDisplay
          key={room.name + index}
          startTime={moment(room.openHours.start)}
          duration={8 * 4}
          currentBookings={roomBookings}
          roomName={room.name} />
      )
    })
  }

  render() {
    return (
        <AppWrap>
          <GlobalStyle />
          <SelectBar/>
          <HourDisplay startTime={moment({ hours: 10 })} duration={8 * 4} />
          {this.generateRooms()}
        </AppWrap>
      );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, rootElement)