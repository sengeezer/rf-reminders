import React, { Component } from 'react';
import moment from 'moment';
import uuid from 'uuid/v1';

import './ReminderForm.css';

class ReminderForm extends Component {
  constructor(props) {
    super(props);
    // TODO: Handle inside form date change
    this.state = {
      month: props.reminder ? props.reminder.month : props.reminderDate.month,
      day: props.reminder ? props.reminder.day : props.reminderDate.day,
      year: props.reminder ? props.reminder.year : props.reminderDate.year,
      time: props.reminder ? props.reminder.time : props.reminderDate.time,
      text: props.reminder ? props.reminder.text : 'Reminder',
      color: props.reminder ? props.reminder.color : 'blue',
      createdAt: props.reminder ? moment(props.reminder.createdAt) : moment(),
      id: props.reminder ? props.reminder.id : uuid(),
      fullDate: props.reminder ? props.reminder.fullDate : props.reminderDate.fullDate,
      error: '',
    }

    this.onMonthChange = this.onMonthChange.bind(this);
    this.onDayChange = this.onDayChange.bind(this);
    this.onYearChange = this.onYearChange.bind(this);
    this.onTimeChange = this.onTimeChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    
    if (!this.state.text || this.state.text.length > 30) {
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
        id: this.state.id,
        createdAt: this.state.createdAt.valueOf(),
        fullDate: this.state.fullDate,
      });
    }
  }
  onDelete(e) {
    e.preventDefault();
    this.props.onDelete(this.state.id);
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <label htmlFor="month">Month:</label>
          <input
            type="text"
            name="month"
            placeholder="Month"
            value={this.state.month}
            onChange={this.onMonthChange}
          />

          <label htmlFor="day">Day:</label>
          <input
            type="text"
            name="day"
            placeholder="Day"
            value={this.state.day}
            onChange={this.onDayChange}
          />

          <label htmlFor="year">Year:</label>
          <input
            type="text"
            name="year"
            placeholder="Year"
            maxLength="4"
            value={this.state.year}
            onChange={this.onYearChange}
          />

          <label htmlFor="time">Time:</label>
          <input
            type="text"
            name="time"
            placeholder="Time"
            value={this.state.time}
            onChange={this.onTimeChange}
          />

          <label htmlFor="text">Text:</label>
          <input
            type="text"
            name="text"
            placeholder="Reminder text"
            maxLength="30"
            value={this.state.text}
            onChange={this.onTextChange}
          />

          <label htmlFor="color">Colour:</label>
          <input
            type="text"
            name="color"
            placeholder="Colour"
            value={this.state.color}
            onChange={this.onColorChange}
          />
          <button
            disabled={this.props.submitDisabled}
            className="small"
          >Submit</button>
        </form>
        <button
          disabled={this.props.deleteDisabled}
          onClick={this.onDelete}
          className="small"
        >Delete Reminder</button>
      </div>
    );
  }
}

export default ReminderForm;
