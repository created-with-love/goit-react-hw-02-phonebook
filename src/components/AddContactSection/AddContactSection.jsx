import React from 'react';
import s from './AddContactSection.module.css';

const AddContactSection = () => (
  <div className={s.container}>
    <form className={s.form}>
      <label>
        <p className={s.form__label}>Name</p>
        <input type="name" className={s.form__firstInput}></input>
      </label>
      <label>
        <p className={s.form__label}>Number</p>
        <input type="phone"></input>
      </label>
      <button className={s.form__button} type="submit">
        Add contact
      </button>
    </form>
  </div>
);

export default AddContactSection;
