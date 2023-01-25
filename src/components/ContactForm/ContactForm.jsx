import { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  }

  handleChange = evt => {
    const {name, value} = evt.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = evt => {
    evt.preventDefault();

    const {onSubmit} = this.props;
    onSubmit({...this.state});
    this.resetForm();
  }

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  }

  render () {
    const {handleChange, handleSubmit} = this;
    const {name, number} = this.state;

    return (
      <div className={s.wrap}>
        <form
          className={s.form}
          onSubmit={handleSubmit}
        >
          <label className={s.label}>Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              className={s.input}
            />
          </label>
          <label className={s.label}>Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              className={s.input}
            />
          </label>

          <button className={s.button} type="submit">Add contact</button>
        </form>
      </div>
    )
  }
}

export default ContactForm;
