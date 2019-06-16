import React from "react";
import onClickOutside from "react-onclickoutside";
import CurrentDate from './currentDate.jsx';

class DateSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listOpen: false }
    this.onClick = this.onClick.bind(this);
  }

  handleClickOutside(e) {
    this.setState({ listOpen: false });
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

export default onClickOutside(DateSelector);

//{listOpen ? " <" : " >"}
