import { useSelector } from 'react-redux';
import { ContactListItems } from '../ContactListItems/ContactListItems';
import * as s from './ContactList.styled';
import { selectVisibleUsers } from 'redux/selectors';

export const ContactList = () => {
  const searchUser = useSelector(selectVisibleUsers);

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
