import React, { Component } from 'react';
import {nanoid} from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  addContact = ({name, number}) => {
    if (this.isExist(name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    this.setState(prevState => {
      const {contacts} = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      }
      return {contacts: [newContact, ...contacts]}
    })

    return true;
  }

  isExist (name) {
    const normalizedName = name.toLowerCase();
    const {contacts} = this.state;
    const existContact = contacts.find(({name}) => {
      return (
        name.toLowerCase() === normalizedName
      )
    })

    return Boolean(existContact);
  }

  handleFilter = evt => {
    const {target} = evt;
    this.setState({filter: target.value})
  }

  getFilteredContacts() {
    const {filter, contacts} = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter))
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  render() {
    const {filter} = this.state;
    const {addContact, deleteContact, handleFilter} = this;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontSize: 20,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact}/>

        <h2>Contacts</h2>
        <ContactFilter value={filter} handleChange={handleFilter}/>
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
      </div>
    );
  }
}

export default App;
