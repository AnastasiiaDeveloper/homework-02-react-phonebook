import React, { Component } from 'react'
import v4  from 'uuid/dist/v4'
import ContactForm from '../ContactForm/ContactForm'
import Filter from '../Filter/Filter'
import ContactList from '../ContactList/ContactList'

class PhoneBook extends Component {
  state = {
    contacts: [
      { id: v4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: v4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: v4(), name: 'Eden Clements', number: '645-17-79' },
      { id: v4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  }

  contacts = this.state.contacts

  updateContacts = contacts => {
    this.contacts = contacts
    this.setState({ contacts })
  }

  setDefaultContacts = () => {
    this.setState({ contacts: this.contacts })
  }

  showFilteredContacts = contacts => {
    this.setState({ contacts })
  }

  
  deleteContact = id =>{
    this.setState({
      contacts: this.state.contacts.filter(contact=> contact.id !== id)

    });
    
    this.contacts=this.state.contacts;
  }



  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          updateContacts={this.updateContacts}
          contacts={this.state.contacts} />
        <h1>Contacts</h1>
        <Filter
          setDefaultContacts={this.setDefaultContacts}
          showFilteredContacts={this.showFilteredContacts}
          contacts={this.contacts} />
        <ContactList contacts={this.state.contacts} deleteContact={this.deleteContact} />
      </div>
    )
  }
}

export default PhoneBook