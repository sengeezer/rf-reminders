import React, { Component } from 'react';
import Calendar from 'react-calendar';

import './about.css';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    }

    this.onChange = this.onChange.bind(this);
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
            value={value}
        />
      </div>
    );
  }
}
