
import { useSelector, useDispatch } from 'react-redux';
import * as s from './Filter.styled';
import { handleCangeFilter } from 'redux/filterSlise';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterUser.filter);

  return (
    <>
      <s.Description>Find contacts by name</s.Description>
      <s.Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. 
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filter}
        onChange={e => dispatch(handleCangeFilter(e.target.value.trim()))}
      />
    </>
  );
};
