export const setLibrary = library => ({
  type: 'SET_LIBRARY',
  library
})

export const addBooking = booking => ({
  type: 'ADD_BOOKING',
  booking
})

export const addMultipleBookings = bookingsList => ({
  type: 'ADD_MULTIPLE_BOOKINGS',
  bookingsList
})

export const setDate = date => ({
  type: 'SET_DATE',
  date
})

export const setTime = time => ({
  type: 'SET_TIME',
  time
})