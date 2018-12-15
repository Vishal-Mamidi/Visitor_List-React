import React, { Component } from 'react';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';


class App extends Component {

  state = {
    pendingGuest: "",
    isFiltered: false,
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId +=1;
    return id;
  }

  toggleGuestPropertyAt = (property, id) => 
    this.setState({
      guests: this.state.guests.map(guest => {
        if (id === guest.id) {
          return {
            ...guest,
            [property]: !guest[property]
          }
        }
        return guest;
      })
    });

  toggleConfirmationAt = id =>
    this.toggleGuestPropertyAt("isConfirmed", id);

  removeGuestAt = id =>
    this.setState({
      guests: [
        ...this.state.guests.slice(0, id),
        ...this.state.guests.slice(id + 1)
      ]
    })

  toggleEditingAt = id =>
    this.toggleGuestPropertyAt("isEditing", id);

  setNameAt = (name, id) => 
  this.setState({
    guests: this.state.guests.map(guest => {
      if (id === guest.id) {
        return {
          ...guest,
          name
        }
      }
      return guest;
    })
  });

  toggleFilter = () =>
    this.setState({ isFiltered: !this.state.isFiltered});

  handleNameInput = e =>
    this.setState({ pendingGuest: e.target.value });

  newGuestSubmitHandler = e => {
    e.preventDefault();
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
        },
        ...this.state.guests
      ],
      pendingGuest: ""
    })
  }

  getTotalInvited = () => this.state.guests.length;
  getAttendingGuest = () => 
    this.state.guests.reduce((total, guest) => guest.isConfirmed ? total + 1: total,
    0);

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuest();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
      <Header 
        newGuestSubmitHandler={this.newGuestSubmitHandler}
        pendingGuest={this.state.pendingGuest}
        handleNameInput={this.handleNameInput} />
      
      
      <MainContent
        toggleFilter={this.toggleFilter}
        isFiltered={this.isFiltered} 
        totalInvited={totalInvited}
        numberAttending={numberAttending}
        numberUnconfirmed={numberUnconfirmed}
        guests={this.state.guests}
        toggleConfirmationAt={this.toggleConfirmationAt}
        toggleEditingAt={this.toggleEditingAt}
        setNameAt={this.setNameAt}
        isFiltered={this.state.isFiltered}
        removeGuestAt={this.removeGuestAt}
        pendingGuest={this.state.pendingGuest} />

      </div>
    );
  }
}

export default App;
