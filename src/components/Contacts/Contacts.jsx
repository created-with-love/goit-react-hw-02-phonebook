import React, { Component } from 'react';
import s from './Contacts.module.css';

class Contacts extends Component {
  state = {
    contacts: this.props.contacts,
    filter: '',
  };

  handleSearch = e => {
    this.setState({
      filter: e.currentTarget.value.toLowerCase(),
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <label htmlFor="search">
          <p className={s.search__label}>Find contacts by name</p>
          <input
            type="search"
            name="search"
            id="search"
            onChange={this.handleSearch}
          />
        </label>
        <ul>
          {contacts
            .filter(person =>
              person.name.toLowerCase().includes(this.state.filter),
            )
            .map(person => (
              <li key={person.id} className={s.search__contact}>
                {person.name} : {person.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
