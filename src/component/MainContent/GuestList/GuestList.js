import React from 'react';
import PropTypes from 'prop-types';

import Guest from './Guest';
import PendingGuest from './PendingGuest';

const GuestList = props =>
  <ul>
    <PendingGuest name={props.pendingGuest} />
    {props.guests
      .filter(guest => !props.isFiltered || guest.isConfirmed)
      .map((guest, index) =>
      <Guest
        key={index}
        guest={guest}
        handleConfirmation={() => props.toggleConfirmationAt(guest.id)}
        handeToggleEditing={() => props.toggleEditingAt(guest.id)}
        setName={text => props.setNameAt(text,guest.id)}
        handleRemove={() => props.removeGuestAt(guest.id)}
      />
    )}
  </ul>;

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  toggleConfirmationAt: PropTypes.func.isRequired,
  toggleEditingAt: PropTypes.func.isRequired,
  setNameAt: PropTypes.func.isRequired,
  isFiltered: PropTypes.bool.isRequired,
  removeGuestAt: PropTypes.func.isRequired,
  pendingGuest: PropTypes.string.isRequired
};

export default GuestList;
