import React, { Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateReminder } from '../actions/reminder';

import ReminderList from './ReminderList';
import ReminderModal from './ReminderModal';

import moment from 'moment';

class TileContent extends Component {
  constructor(props) {
    super(props);

    const tileDateMoment = moment(this.props.date);
    const tileDateObj = tileDateMoment.format('MMMM,D,YYYY,HH,ss').split(',');
    // TODO: Should this go into redux?
    this.state = {
      shouldOpen: false,
      tileDate: {
        month: tileDateObj[0],
        day: tileDateObj[1],
        year: tileDateObj[2],
        time: `${tileDateObj[3]}:${tileDateObj[4]}`,
        fullDate: tileDateMoment,
      },
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleReminderSelect = this.handleReminderSelect.bind(this);
  }
  handleButtonClick(ev) {
    ev.preventDefault();
    this.setState(() => ({ shouldOpen: true }));
  }
  handleModalClose() {
    // TODO: Reset selected reminder
    this.setState(() => ({ shouldOpen: false, reminderId: null }));
  }
  handleReminderSelect(ev) {
    // source of data = ?
    ev.preventDefault();
    const reminderId = ev.currentTarget.dataset.id;

    this.setState(() => ({ shouldOpen: true, reminderId }));
  }
  render() {
    return (
      <div>
        <ReminderList
          reminders={this.props.reminders}
          reminderListDate={this.state.tileDate.fullDate}
          handleReminderSelect={this.handleReminderSelect}
        />
        <div
          className="addReminder__button"
          onClick={this.handleButtonClick}
        >+</div>
        {/* TODO: Communicate form mode (CRUD) */}
        <ReminderModal
          reminderDate={this.state.tileDate}
          reminderId={this.state.reminderId}
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

const mapDispatchToProps = dispatch => bindActionCreators({
  updateReminder,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TileContent);
