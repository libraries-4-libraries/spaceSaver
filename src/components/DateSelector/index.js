import React from "react";
import CurrentDate from './currentDate.jsx';

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOpen: false }
    this.onClick = this.onClick.bind(this);
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  onClick() {
    this.toggleList();
  }

  componentDidMount() {
    console.log('Date Selector mounted');
  }

  render() {
    const { listOpen } = this.state;

    return (
      <div onClick={this.onClick}>
        <CurrentDate open={listOpen} />
      </div>
    );
  }
}

export default DateSelector;
