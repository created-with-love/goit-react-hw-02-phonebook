import React, { Component } from 'react';
import dataFromServer from './data/contacts.json';
import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: dataFromServer,
  };

  formSubmitHandler = data => {
    data.id = uuidv4();

    this.setState(({ contacts }) => ({
      contacts: [data, ...contacts],
    }));
  };

  deleteContact = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Contacts contacts={contacts} onDeleteBtnClick={this.deleteContact} />
        </Section>
      </>
    );
  }
}

export default App;
