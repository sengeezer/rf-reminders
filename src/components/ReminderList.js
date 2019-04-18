import React, { Component } from 'react';

import Reminder from './Reminder';

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

export default ReminderList;
