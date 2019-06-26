import moment from 'moment';

export function validateBookingLength(bookingCells, limit){
  //limit should be in minutes, for now

  let startTime = bookingCells[0].hour;
  let endTime = bookingCells[bookingCells.length-1].hour;
  let duration = endTime.diff(startTime, 'minutes');
  console.log('booking is', duration, 'minutes')
  if (limit <= duration) return false;
  return true;
}

export function validateBookingData(booking){
  //if (booking.name) exists in list of current bookings in db, return false
}