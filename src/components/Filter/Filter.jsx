import React from 'react';
import s from '../Contacts/Contacts.module.css';

const Filter = ({ value, onChange }) => (
  <label htmlFor="search">
    <p className={s.search__label}>Find contacts by name</p>
    <input
      type="search"
      name="search"
      id="search"
      onChange={onChange}
      value={value}
    />
  </label>
);

export default Filter;
