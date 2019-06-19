export const setCurrentLibrary = library => ({
  type: 'SET_CURRENT_LIBRARY',
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