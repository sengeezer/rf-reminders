import React, { Component } from 'react';
import { connect } from 'react-redux';

import Reminder from './Reminder';
import selectReminders from '../selectors/reminders';

import './ReminderList.css';

class ReminderList extends Component {
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

const mapStateToProps = ({ reminders }) => ({
  reminders: selectReminders(reminders),
});

export default connect(mapStateToProps)(ReminderList);
