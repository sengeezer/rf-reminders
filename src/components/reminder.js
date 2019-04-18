import React, { Component } from 'react';

import './Reminder.css';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      year: '',
      time: '00:00',
      text: 'Default text',
      color: 'blue',
      isCurrent: false,
    };
  }
  render() {
    return (
      <div className="reminder">
        <ul>
          <li>{this.state.time}</li>
          <li style={{color: this.state.color}}>{this.state.text}</li>
        </ul>
      </div>
    );
  }
}

export default Reminder;
