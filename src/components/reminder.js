import React, { Component } from 'react';

class Reminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      year: '',
      time: '',
      text: 'Default text',
      color: '',
      isCurrent: false,
    };
  }
  render() {
    return (
      <div>
        {this.props.reminderText}
      </div>
    );
  }
}

export default Reminder;
