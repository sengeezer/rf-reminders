import React, { Component } from 'react';
import moment from 'moment';

class ReminderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.reminder ? moment(props.reminder.date) : moment(),
      // TODO: Break down this.state.date into components
      month: props.reminder ? props.reminder.month : '04',
      day: props.reminder ? props.reminder.day : '02',
      year: props.reminder ? props.reminder.year : '2019',
      time: props.reminder ? props.reminder.time : '00:00',
      text: props.reminder ? props.reminder.text : 'Reminder',
      color: props.reminder ? props.reminder.color : 'blue',
      error: '',
    }
  }
  onMonthChange(e) {
    const month = e.target.value;
    this.setState(() => ({ month }));
  }
  onDayChange(e) {
    const day = e.target.value;
    this.setState(() => ({ day }));
  }
  onYearChange(e) {
    const year = e.target.value;
    this.setState(() => ({ year }));
  }
  onTimeChange(e) {
    const time = e.target.value;
    this.setState(() => ({ time }));
  }
  onTextChange(e) {
    const text = e.target.value;
    this.setState(() => ({ text }));
  }
  onColorChange(e) {
    const color = e.target.value;
    this.setState(() => ({ color }));
  }
  onSubmit(e) {
    e.preventDefault();
    
    if (!this.state.text) {
      this.setState(() => ({ error: 'Please provide a valid reminder text.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        month: this.state.month,
        day: this.state.day,
        year: this.state.year,
        time: this.state.time,
        text: this.state.text,
        color: this.state.color,
      });
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Month"
            value={this.state.month}
            onChange={this.onMonthChange}
          />
          <input
            type="text"
            placeholder="Day"
            value={this.state.day}
            onChange={this.onDayChange}
          />
          <input
            type="text"
            placeholder="Year"
            maxlength="4"
            value={this.state.year}
            onChange={this.onYearChange}
          />
          <input
            type="text"
            placeholder="Time"
            value={this.state.time}
            onChange={this.onTimeChange}
          />
          <input
            type="text"
            placeholder="Text"
            maxlength="30"
            value={this.state.text}
            onChange={this.onTextChange}
          />
          <input
            type="text"
            placeholder="Colour"
            value={this.state.color}
            onChange={this.onColorChange}
          />
          <button
            disabled={this.props.submitDisabled}
            // onClick={this.props.handleClearSelected}
            className="small"
          >Submit</button>
        </form>
      </div>
    );
  }
}

export default ReminderForm;
