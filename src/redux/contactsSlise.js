import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
    deleteUser(state, action) {
      const index = state.contacts.findIndex(
        user => user.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addUser, deleteUser } = contactsSlice.actions;
