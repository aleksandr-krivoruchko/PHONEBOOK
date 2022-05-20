import { toast } from 'react-toastify';

import * as contactsAPI from '../../services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

//!=============Используем createAsyncThunk===================
export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.fetchContacts();
      return response;
    } catch (err) {
      toast(`${err.message}. Try reloading the page`);
      return rejectWithValue(err.response.statusText);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const newContact = await contactsAPI.addContact(contact);
      return newContact;
    } catch (err) {
      toast(`${err.message}. Try reloading the page`);
      return rejectWithValue(err.response.statusText);
    }
  }
);
export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const removedContact = await contactsAPI.removeContact(contactId);
      return removedContact;
    } catch (err) {
      toast(`${err.message}. Try reloading the page`);
      return rejectWithValue(err.response.statusText);
    }
  }
);

//====================================================
// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest);

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error));
//   }
// }; //Получение контактов

// export const addContact = contact => async dispatch => {
//   dispatch(contactsActions.addContactRequest);

//   try {
//     const newContact = await contactsAPI.addContact(contact);
//     dispatch(contactsActions.addContactSuccess(newContact));
//   } catch (error) {
//     console.log(error.message);

//     dispatch(contactsActions.addContactError(error));
//   }
// }; //Добавление контакта

// export const removeContact = contactId => async dispatch => {
//   dispatch(contactsActions.removeContactRequest);

//   try {
//     const removedContact = await contactsAPI.removeContact(contactId);
//     dispatch(contactsActions.removeContactSuccess(removedContact));
//   } catch (error) {
//     dispatch(contactsActions.removeContactError(error.message));
//   }
// }; //Удаление контакта
