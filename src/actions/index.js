//'library' is a string representing the name of a library
export const setLibrary = library => ({
  type: 'SET_LIBRARY',
  library
})

//'booking' is a booking object (see db for structure of booking objects)
export const addBooking = booking => ({
  type: 'ADD_BOOKING',
  booking
})

//'bookingsList' is an array of bookings objects (see db for structure of booking objects)
export const addMultipleBookings = bookingsList => ({
  type: 'ADD_MULTIPLE_BOOKINGS',
  bookingsList
})

//'date' is a moment.js object
export const setDate = date => ({
  type: 'SET_DATE',
  date
})

//'time' is an object with keys 'start' and 'end'
export const setTime = time => ({
  type: 'SET_TIME',
  time
})

//'room' is a string
export const setRoom = room => ({
  type: 'SET_ROOM',
  room
})

//'name' is a string representing the name associated with the current booking
export const setName = name => ({
  type: 'SET_NAME',
  name
})

//'email' is a string representing the email associated with the current booking
export const setEmail = email => ({
  type: 'SET_EMAIL',
  email
})