import React, { Component} from 'react';
import moment from 'moment';

import ReminderList from './ReminderList';
import ReminderModal from './ReminderModal';

class TileContent extends Component {
  constructor(props) {
    super(props);

    const tileDateObj = this.props.date;
    // TODO: Should this go into redux?
    this.state = {
      shouldOpen: false,
      tileDate: {
        month: tileDateObj.month(),
        day: tileDateObj.day(),
        year: tileDateObj.year(),
        time: `${tileDateObj.hour()}:${tileDateObj.minute()}`,
      },
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleButtonClick(e) {
    e.preventDefault();
    this.setState(() => ({ shouldOpen: true }));
  }
  handleModalClose() {
    this.setState(() => ({ shouldOpen: false }));
  }
  render() {
    console.log('date:', moment(this.props.date).day());
    return (
      <div>
        <ReminderList reminders={[]} />
        <button
          className="addReminder__button"
          onClick={this.handleButtonClick}
        >+</button>
        {/* TODO: Communicate form mode (CRUD) */}
        <ReminderModal
          // reminderDate={this.props.date}
          reminderDate={this.state.tileDate}
          shouldOpen={this.state.shouldOpen}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

export default TileContent;
