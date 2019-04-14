import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class About extends Component {
  state = {
    value: new Date(),
  }
  onChange(value) {
    this.setState({ value });
  }
  render() {
    const { value } = this.state;

    return (
      <div>
        <h2>About Us</h2>

        <Calendar
            onChange={this.onChange}
            showWeekNumbers
            value={value}
        />
      </div>
    );
  }
}
