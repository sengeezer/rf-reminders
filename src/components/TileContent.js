import React, { Component} from 'react';

import ReminderModal from './ReminderModal';

class TileContent extends Component {
  constructor(props) {
    super(props);
    // TODO: Should this go into redux?
    this.state = {
      shouldOpen: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(e) {
    e.preventDefault();
    this.setState(() => ({ shouldOpen: true }));
  }
  render() {
    return (
      <div>
        {this.props.tileText}
        {(this.props.date).toString()}
        <button
          className="addReminder__button"
          onClick={this.handleButtonClick}
        >+</button>
        <ReminderModal reminderDate={this.props.date} shouldOpen={this.state.shouldOpen} />
      </div>
    );
  }
}

export default TileContent;
