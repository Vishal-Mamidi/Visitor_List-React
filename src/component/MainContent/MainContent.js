import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';
import GuestList from './GuestList/GuestList';
import ConfirmedFilter from './ConfirmedFilter';

const MainContent = props => 
    <div className="main">
        <ConfirmedFilter
          toggleFilter={props.toggleFilter}
          isFiltered={props.isFiltered}  />

        <Counter 
          totalInvited={props.totalInvited}
          numberAttending={props.numberAttending}
          numberUnconfirmed={props.numberUnconfirmed}
        />
        <GuestList 
            guests={props.guests}
            toggleConfirmationAt={props.toggleConfirmationAt}
            toggleEditingAt={props.toggleEditingAt}
            setNameAt={props.setNameAt}
            isFiltered={props.isFiltered}
            removeGuestAt={props.removeGuestAt}
            pendingGuest={props.pendingGuest} />
    </div>

MainContent.propTypes = {
    toggleFilter: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    numberAttending: PropTypes.number,
    numberUnconfirmed: PropTypes.number,
    totalInvited: PropTypes.number,
    guests: PropTypes.array.isRequired,
    toggleConfirmationAt: PropTypes.func.isRequired,
    toggleEditingAt: PropTypes.func.isRequired,
    setNameAt: PropTypes.func.isRequired,
    isFiltered: PropTypes.bool.isRequired,
    removeGuestAt: PropTypes.func.isRequired,
    pendingGuest: PropTypes.string.isRequired
}

export default MainContent;