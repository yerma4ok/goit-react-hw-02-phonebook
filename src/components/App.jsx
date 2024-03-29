import { React, Component } from 'react';
import { nanoid } from 'nanoid';
import FormAddContact from './FormAddContact';
import SectionWrap from './SectionWrap';
import ContactsList from './ContactsList';
import FilterByName from './FilterByName';
import { MainTitle, ContactTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const isExist = this.state.contacts.find(contact => contact.name === name);

    isExist
      ? alert(`${name} is already in the contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  getSortedContacts = contacts => {
    return contacts.sort((x, y) => x.name.localeCompare(y.name));
  };

  render() {
    const { filter, contacts } = this.state;
    const filteredContacts = this.getFilteredContacts(contacts);
    const sortedContacts = this.getSortedContacts(filteredContacts);
    return (
      <>
        <SectionWrap>
          <MainTitle>Phonebook</MainTitle>
          <FormAddContact onAddFormSubmit={this.addContact} />
        </SectionWrap>
        <SectionWrap>
          <ContactTitle>Contacts</ContactTitle>
          <FilterByName value={filter} onChange={this.changeFilter} />
          <ContactsList
            contacts={sortedContacts}
            deleteContact={this.deleteContact}
          />
        </SectionWrap>
      </>
    );
  }
}

export default App;
