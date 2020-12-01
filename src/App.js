import React, { Component } from 'react';
import DataGenerator from './components/DataGenerator';
import data from './data/contacts.json';
import AddContactSection from './components/AddContactSection';
import Section from './components/Section';
import Contacts from './components/Contacts';

class App extends Component {
  state = {
    contacts: DataGenerator(data),
    name: '',
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <AddContactSection />
        </Section>

        <Section title="Contacts">
          <Contacts contacts={this.state.contacts} />
        </Section>
      </>
    );
  }
}

export default App;
