import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import moment from 'moment';

import ReminderForm from './ReminderForm';
import { createReminder } from '../actions/reminder';

import './ReminderModal.css';

class ReminderModal extends Component {
  constructor(props) {
    super(props);
    // compare vs mapStateToProps
    const reminderDateCalc = moment(this.props.reminderDate);
    this.state = {
      calcMonth: reminderDateCalc.month(),
      calcDay: reminderDateCalc.day(),
      calcYear: reminderDateCalc.year(),
      calcTime: `${reminderDateCalc.hour()}:${reminderDateCalc.minute()}`,
    };
  }
  onSubmit(reminder) {
    this.props.createReminder(reminder);
    this.props.handleModalClose();
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.shouldOpen}
        onRequestClose={this.props.handleModalClose}
        contentLabel="Create or modify reminder"
        closeTimeoutMS={200}
        className="modal"
      >
        <ReminderForm
          onSubmit={this.onSubmit}
          submitDisabled={this.props.isCreating}
          // pass processed date object
          reminderDate={this.props.reminderDate}
        />
      </Modal>
    );
  }
}

Modal.setAppElement('#root');

const mapStateToProps = ({ reminders }) => ({
  isCreating: reminders.isCreating,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  createReminder,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal);
