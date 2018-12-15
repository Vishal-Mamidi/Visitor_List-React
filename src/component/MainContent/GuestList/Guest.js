import React from 'react';
import PropTypes from 'prop-types';
import GuestName from './GuestName';

const Guest = props =>
  <li>
    <GuestName 
      isEditing={props.guest.isEditing}
      handleNameEdits={e => props.setName(e.target.value)} >
      {props.guest.name}
    </GuestName>
    <label>
      <input
        type="checkbox"
        checked={props.guest.isConfirmed}
        onChange={props.handleConfirmation} /> Confirmed
    </label>
    <button onClick={props.handeToggleEditing}>
      {props.guest.isEditing ? "Save" : "Edit"}
    </button>
    <button onClick={props.handleRemove}>remove</button>
  </li>;

Guest.propTypes = {
  guest: PropTypes.object.isRequired,
  handleConfirmation: PropTypes.func.isRequired,
  handeToggleEditing: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired
};

export default Guest;
