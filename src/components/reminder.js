import React, { Component } from 'react';

import './Reminder.css';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCurrent: false,
    };
  }
  render() {
    return (
      <li className="reminder" data-id={this.props.id} onClick={this.props.handleReminderSelect}>
        <ul>
          <li>{this.props.time}</li>
          <li style={{color: this.props.color}}>{this.props.text}</li>
        </ul>
      </li>
    );
  }
}

export default Reminder;
