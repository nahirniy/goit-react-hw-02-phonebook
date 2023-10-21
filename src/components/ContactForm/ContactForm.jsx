import { Component } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  createContact = () => {
    const { name, number } = this.state;
    const id = nanoid();

    return {
      id,
      name,
      number,
      visible: true,
    };
  };

  render() {
    return (
      <form className={css.form} onSubmit={e => this.props.addContact(this.createContact(), e)}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
            className={css.input}
            type="text"
            name="name"
            id="name"
            required
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input
            className={css.input}
            type="tel"
            name="number"
            id="number"
            required
            onChange={this.handleChange}
          />
        </label>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
