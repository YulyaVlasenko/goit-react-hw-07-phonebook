import { useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import * as s from './App.styled';

const App = () => {
  const usersQuantity = useSelector(
    state => state.contactsUser.contacts.length
  );

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {usersQuantity > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </s.Container>
  );
};

export default App;
