import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));
export const deleteContact = createAction('contact/delete');
export const filterContact = createAction('contact/filter');
