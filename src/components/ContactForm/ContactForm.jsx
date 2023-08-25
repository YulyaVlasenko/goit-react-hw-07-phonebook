import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import * as s from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { selectUsers } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleCange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
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

    dispatch(addContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
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
          name="phone"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleCange}
        />
      </s.Label>

      <button type="submit">Add contact</button>
    </s.Form>
  );
}
