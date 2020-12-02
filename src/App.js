import React, { Component } from 'react';
import DataGenerator from './components/DataGenerator';
import data from './data/contacts.json';
import Form from './components/Form';
import Section from './components/Section';
import Contacts from './components/Contacts';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: DataGenerator(data),
  };

  formSubmitHandler = data => {
    data.id = uuidv4();

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, data],
      };
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Phonebook">
          <Form onSubmit={this.formSubmitHandler} />
        </Section>

        <Section title="Contacts">
          <Contacts contacts={contacts} />
        </Section>
      </>
    );
  }
}

export default App;
