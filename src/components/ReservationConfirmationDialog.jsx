import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogDataText from './DialogDataText.jsx';

import { setName, setEmail } from '../actions'
import { connect } from 'react-redux';


function FormDialog(props) {
  return (
      <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reservation Confirmation</DialogTitle>
        <DialogContent>
          <DialogDataText/>
          <TextField
            inputProps={{
              onChange:
                (e)=>{props.dispatch(setName(e.target.value))
              }
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
          />
          <TextField
            inputProps={{
              onChange:
                (e)=>{props.dispatch(setEmail(e.target.value))
              }
            }}
            autoFocus
            margin="dense"
            id="email"
            label="E-mail Address (optional)"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => props.handleClose(true)} color="primary">
            Make Reservation
          </Button>
          <Button onClick={(e) => props.handleClose(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
  );
}

export default connect()(FormDialog)