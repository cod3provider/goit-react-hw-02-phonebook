import s from './ContactList.module.css';

import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({id, name, number}) => (
          <li key={id} className={s.item}>
            {name}: {number}
            <button className={s.button} type="submit" onClick={() => onDeleteContact(id)}>Delete</button>
          </li>
        )
      )}
    </ul>
  )
}

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
