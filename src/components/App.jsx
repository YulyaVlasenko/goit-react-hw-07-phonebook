import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import {
  selectUsersQuantity,
  selectError,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import * as s from './App.styled';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const App = () => {
  const usersQuantity = useSelector(selectUsersQuantity);

  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <s.Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {isLoading && !error && Loading.arrows()}
      {!isLoading && Loading.remove()}
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
