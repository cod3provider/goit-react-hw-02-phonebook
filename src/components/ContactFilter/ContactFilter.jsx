import PropTypes from 'prop-types';

import s from './ContactFilter.module.css';

const ContactFilter = ({ filter, handleChange }) => {
  return (
    <div className={s.filter}>
      <label >Find contacts by name
        <input
          name="filter"
          type="text"
          onChange={handleChange}
          className={s.input}
        />
      </label>
    </div>
  )
}

export default ContactFilter;

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
