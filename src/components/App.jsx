import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (newContact, e) => {
    e.preventDefault();

    const { contacts } = this.state;
    const newName = newContact.name.toLowerCase();

    const isCheckedContact = contacts.find(({ name }) => name.toLowerCase() === newName);

    if (!isCheckedContact) {
      this.setState({ contacts: [...this.state.contacts, newContact] });
    } else {
      Notify.failure(`${newContact.name} is already in contacts`);
    }
  };

  findContact = ({ target: { value: searchContact } }) => {
    this.setState(prevState => {
      const suitableContacts = prevState.contacts.map(contact => {
        const allowVisible = contact.name.toLowerCase().includes(searchContact.toLowerCase());

        return { ...contact, visible: allowVisible };
      });

      return { contacts: suitableContacts };
    });
  };

  deleteContact = idDeleteContact => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== idDeleteContact),
    });
  };

  render() {
    const { addContact, findContact, deleteContact } = this;

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <Filter findContact={findContact} />
        <ContactList contacts={this.state.contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default App;
