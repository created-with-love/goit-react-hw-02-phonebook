import React, { Component } from 'react';
import s from './Form.module.css';
import { v4 as uuidv4 } from 'uuid';

class Form extends Component {
  state = {
    name: '',
    number: '',
    // formSubmitHandler: this.props.formSubmitHandler,
  };

  nameId = uuidv4();

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  // для получения данных из формы в App.js во время сабмита
  // использую метод с поднятием состояния в родитель
  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  // form.reset() в реакте не работает, пользуюсь методом
  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.container}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameId}>
            <p className={s.form__label}>Name</p>
            <input
              type="text"
              name="name"
              className={s.form__firstInput}
              value={name}
              onChange={this.handleInputChange}
              id={this.nameId}
            ></input>
          </label>
          <label>
            <p className={s.form__label}>Number</p>
            <input
              type="number"
              name="number"
              value={number}
              onChange={this.handleInputChange}
            ></input>
          </label>
          <button
            className={s.form__button}
            type="submit"
            disabled={name === '' || number === ''}
            // onClick={() => this.state.formSubmitHandler(this.state)}
          >
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
