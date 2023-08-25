import { useDispatch } from 'react-redux';
import * as s from './ContactListItems.styled';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';

export const ContactListItems = ({ user: { name, phone, id } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <s.Name>{name}:</s.Name>
      <s.Number>{phone}</s.Number>
      <s.Button onClick={handleDelete}>Delete</s.Button>
    </>
  );
};

ContactListItems.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};
