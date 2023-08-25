import { useDispatch } from 'react-redux';
import * as s from './ContactListItems.styled';
import PropTypes from 'prop-types';
import { deleteUser } from 'redux/contactsSlise';

export const ContactListItems = ({ user: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <>
      <s.Name>{name}:</s.Name>
      <s.Number>{number}</s.Number>
      <s.Button onClick={() => dispatch(deleteUser(id))}>Delete</s.Button>
    </>
  );
};

ContactListItems.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
