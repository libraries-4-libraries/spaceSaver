import {combineReducers} from 'redux'


const setLibrary = (prevState = '', action) => {
  switch(action.type){
    case 'SET_LIBRARY':
      return action.library
    default:
      return prevState
  }
}

const setDate = (prevState = '', action) => {
  switch(action.type){
    case 'SET_DATE':
      return action.date
    default:
      return prevState
  }
}

const time = (prevState = {start: null, end: null}, action) => {
  switch(action.type){
    case 'SET_TIME':
      return {
        start: action.time.start,
        end: action.time.end
      }
    default:
      return prevState
  }
}

const room = (prevState='', action) => {
  switch(action.type){
    case 'SET_ROOM':
      return action.room
    default:
      return prevState
  }
}

const name = (prevState='', action) => {
  switch(action.type){
    case 'SET_NAME':
      return action.name
    default:
      return prevState
  }
}

const email = (prevState='', action)=>{
  switch(action.type){
    case 'SET_EMAIL':
      return action.email
    default:
      return prevState
  }
}

const addBooking = (prevState = [], action) => {
  switch(action.type){
    case 'ADD_BOOKING':
      return [
        ...prevState,
        action.booking
      ]
    case 'ADD_MULTIPLE_BOOKINGS':
      return [
        ...prevState,
        ...action.bookingsList
      ]
    default:
      return prevState
  }
}

export default combineReducers({
  setLibrary,
  setDate,
  time,
  room,
  name,
  email,
  addBooking
});