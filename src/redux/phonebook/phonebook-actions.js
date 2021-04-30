import { v4 as uuidv4 } from 'uuid';

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contscts/addContact',
  (contactName, ContactNumber) => {
    return {
      payload: {
        id: uuidv4(),
        name: contactName,
        number: ContactNumber,
      },
    };
  },
);

export const filterChange = createAction('contacts/filterChange');

export const deleteContact = createAction('contacts/deleteContact');
