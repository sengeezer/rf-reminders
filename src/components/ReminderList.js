import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Reminder from './Reminder';
import selectReminders from '../selectors/reminders';

import { setDate, sortByDate } from '../actions/filters';

import './ReminderList.css';

class ReminderList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listDate: this.props.reminderListDate,
    };

    if (this.props.reminders.length > 0) {
      this.props.sortByDate();
    }
    this.props.setDate(this.props.reminderListDate);
  }
  render() {
    return (
      <div>
        <ul className="reminderList">
          {
            this.props.reminders.length === 0 ? (
              <li>No reminders found</li>
            ) : (
              this.props.reminders.map(reminder => (
                <Reminder key={reminder.id} {...reminder} />
              ))
            )
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ reminders, filters }, { reminderListDate }) => ({
  reminders: selectReminders(reminders, filters, reminderListDate),
  filters,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sortByDate,
  setDate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);
