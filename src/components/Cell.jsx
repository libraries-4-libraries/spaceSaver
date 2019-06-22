import React from "react";
import { BasicCell } from './styles.jsx';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booked: false
    }
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      booked: this.props.cellObject.booked,
      text: this.props.cellObject.text
    });
  }

  onClick() {
    if (this.state.booked === false) {
      let name = window.prompt('Please enter name for reservation: ');
      if (name) {
        //post request to server
        let data = {
          name: name,
          library: 'tbd',
          roomName: this.props.cellObject.room,
          time: this.props.cellObject.time,
          date: 'tbd'
        }

        fetch('http://localhost:3838/bookings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });

        this.setState({
          booked: true,
          text: name
        });
      }
    } else if (this.state.booked === true) {
      let cancel = window.confirm('Cancel reservation?');
      if (cancel) {
        //delete request to server

        this.setState({
          booked: false,
          text: 'available'
        });
      }
    } else {
      //do nothing
    }
  }

  render() {
    return (
      <BasicCell
        alignCell={this.props.cellObject.align}
        onClick={this.onClick}
        backgroundColor={this.state.booked ? '#92D177' : this.props.cellObject.color}>
        {this.state.text}
      </BasicCell>
    );
  }
}

export default Cell;
