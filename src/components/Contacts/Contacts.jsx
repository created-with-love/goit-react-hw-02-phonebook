import React from 'react';
import s from './Contacts.module.css';

const Contacts = ({ contacts }) => (
  <div>
    <label htmlFor="search">
      <p className={s.search__label}>Find contacts by name</p>
      <input type="search" name="search" id="search" />
    </label>
    <ul>
      {contacts.map(person => (
        <li key={person.id} className={s.search__contact}>
          {person.name} : {person.number}
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;
