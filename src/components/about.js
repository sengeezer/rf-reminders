import React, { Component } from 'react';
import Calendar from 'react-calendar';

import TileContent from './TileContent';

import './about.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date(),
    }

    this.onChange = this.onChange.bind(this);
    this.handleDaySelect = this.handleDaySelect.bind(this);
  }
  onChange(value) {
    this.setState({ value });
  }
  handleDaySelect(value) {
    // console.log('Selected', value);
  }
  render() {
    const { value } = this.state;

    return (
      <div>
        <h2>About Us</h2>

        <Calendar
            onChange={this.onChange}
            value={value}
            locale={'en-GB'}
            selectRange={false}
            onClickDay={this.handleDaySelect}
            tileContent={({ date, view }) => (<TileContent date={date} tileView={view} />)}
        />
      </div>
    );
  }
}

export default About;
