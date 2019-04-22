import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Reminder from './Reminder';
import selectReminders from '../selectors/reminders';

import { sortByDate } from '../actions/filters';

import './ReminderList.css';

class ReminderList extends Component {
  constructor(props) {
    super(props);

    if (this.props.reminders.length > 0) {
      this.props.sortByDate();
    }
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

const mapStateToProps = ({ reminders, filters }) => ({
  reminders: selectReminders(reminders, filters),
  filters
});

const mapDispatchToProps = dispatch => bindActionCreators({
  sortByDate,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReminderList);
