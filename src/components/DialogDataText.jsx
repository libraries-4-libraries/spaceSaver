import React from 'react'
import { connect } from 'react-redux'
import DialogContentText from '@material-ui/core/DialogContentText'
import moment from 'moment'

function DialogDataText({time, date, library, room}){
  return <div>
    <DialogContentText>
      Location: {library + ', ' +  room}
    </DialogContentText>
    <DialogContentText>
      Date: {date.format('ddd, MMM Do')}
    </DialogContentText>
    <DialogContentText>
      Start Time: {time.start.format('hh:mm')}
    </DialogContentText>
    <DialogContentText>
      End Time: {time.end.format('hh:mm')}
    </DialogContentText>
  </div>
}

function mapStateToProps(state){
  return {
    time: state.time,
    date: state.setDate,
    library: state.setLibrary,
    room: state.room
  }
}

export default connect(mapStateToProps)(DialogDataText)