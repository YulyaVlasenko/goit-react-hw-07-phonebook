import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import * as s from './ContactForm.styled';
import { addUser } from 'redux/contactsSlise';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.contactsUser.contacts);

  const handleCange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const isDuplicateUser = users.some(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (isDuplicateUser) {
      alert('This name is already in the contacts list.');
      reset();
      return;
    }

    dispatch(addUser({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.Label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. 
            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleCange}
        />
      </s.Label>

      <s.Label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleCange}
        />
      </s.Label>

      <button type="submit">Add contact</button>
    </s.Form>
  );
}
