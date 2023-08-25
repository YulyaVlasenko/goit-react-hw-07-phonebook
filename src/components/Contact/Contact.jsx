import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ contact: { name, number } }) => {
  return (
    <li>
      <p>{name}: {number}</p>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;