import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.items;
const getFilter = state => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const getFiteredContacts = contacts => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(text =>
        text.name.toLowerCase().includes(normalizedFilter),
      );
    };

    return getFiteredContacts(contacts);
  },
);

const contactsSelectors = {
  getContacts,
  getFilter,
  getVisibleContacts,
};

export default contactsSelectors;
