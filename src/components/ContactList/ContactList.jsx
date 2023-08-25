import { useSelector } from 'react-redux';
import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';

export const ContactList = () => {
  const users = useSelector(state => state.contactsUser.contacts);
  const filter = useSelector(state => state.filterUser.filter);

  const searchUserBook = () => {
    return users.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const searchUser = searchUserBook();

  return (
    <s.List>
      {searchUser.map(user => (
        <s.ListItems key={user.id}>
          <ContactListItems user={user} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
