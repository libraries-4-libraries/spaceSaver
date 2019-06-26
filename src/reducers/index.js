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
  addBooking
});