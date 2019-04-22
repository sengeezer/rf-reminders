import React, { Component} from 'react';
import { connect } from 'react-redux';

import ReminderList from './ReminderList';
import ReminderModal from './ReminderModal';

import moment from 'moment';

class TileContent extends Component {
  constructor(props) {
    super(props);

    const tileDateObj = moment(this.props.date).format('MMMM,D,YYYY,HH,ss').split(',');
    // TODO: Should this go into redux?
    this.state = {
      shouldOpen: false,
      tileDate: {
        month: tileDateObj[0],
        day: tileDateObj[1],
        year: tileDateObj[2],
        time: `${tileDateObj[3]}:${tileDateObj[4]}`,
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
    return (
      <div>
        <ReminderList reminders={this.props.reminders} />
        <div
          className="addReminder__button"
          onClick={this.handleButtonClick}
        >+</div>
        {/* TODO: Communicate form mode? (CRUD) */}
        <ReminderModal
          reminderDate={this.state.tileDate}
          shouldOpen={this.state.shouldOpen}
          handleModalClose={this.handleModalClose}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reminders }) => ({
  reminders: reminders.reminders,
});

export default connect(mapStateToProps)(TileContent);
