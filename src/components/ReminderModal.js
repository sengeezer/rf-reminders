import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import ReminderForm from './ReminderForm';

class ReminderModal extends Component {
  onSubmit(reminder) {
    // this.props.startAddReminder(reminder);
    // this.props.history.push('/');
  }
  render() {
    return (
      <Modal
        isOpen={!!this.props.selectedOption}
        onRequestClose={this.props.handleClearSelected}
        contentLabel="Create or modify reminder"
        closeTimeoutMS={200}
        className="modal"
      >
    <ReminderForm onSubmit={this.onSubmit} />
  </Modal>
    );
  }
}

Modal.setAppElement('#app');

export default ReminderModal;
