import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import ReminderForm from './ReminderForm';
import { createReminder, updateReminder, deleteReminder } from '../actions/reminder';

import './ReminderModal.css';

class ReminderModal extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onSubmit(reminder) {
    this.props.createReminder(reminder);
    this.props.handleModalClose();
  }
  onUpdate(reminder) {
    this.props.updateReminder(reminder);
    this.props.handleModalClose();
  }
  onDelete(reminder) {
    this.props.deleteReminder(reminder);
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
      {/* TODO: Pass in entire reminder */}
        <ReminderForm
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
          submitDisabled={this.props.isCreating}
          reminderDate={this.props.reminderDate}
          reminderId={this.props.reminderId}
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
  updateReminder,
  deleteReminder,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ReminderModal);
