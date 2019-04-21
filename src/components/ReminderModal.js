import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import ReminderForm from './ReminderForm';
import { createReminder } from '../actions/reminder';

import './ReminderModal.css';

class ReminderModal extends Component {
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
