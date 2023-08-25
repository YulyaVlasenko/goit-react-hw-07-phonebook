import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.contactsUser.contacts.items;

export const selectFilter = state => state.filterUser.filter;

export const selectIsLoading = state => state.contactsUser.contacts.isLoading;

export const selectError = state => state.contactsUser.contacts.error;

export const selectUsersQuantity = state =>
  state.contactsUser.contacts.items.length;

export const selectVisibleUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    return users.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
