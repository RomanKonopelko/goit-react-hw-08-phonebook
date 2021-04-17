import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contactsApp.contacts;

export const getFilter = state => state.contactsApp.filter;

export const getLoading = state => state.contactsApp.loading;

export const getFilteredContacts = createSelector([getFilter, getContacts], (filter, contacts) => {
  const normalizeFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizeFilter) || contact.number.includes(filter),
  );
  return filteredContacts;
});
