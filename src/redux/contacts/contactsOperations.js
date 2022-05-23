import { toast } from 'react-toastify';

import * as contactsAPI from '../../services/contactsAPI';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsAPI.fetchContacts();
      return response;
    } catch (err) {
      toast.error(
        `You are not ${err.response.statusText.toLowerCase()}.Please log in :)`
      );
      return rejectWithValue(err.response);
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
      toast(`${err.response.statusText}.Register or log in`);
      return rejectWithValue(err.response);
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
      toast(`${err.response.statusText}. Try reloading the page`);
      return rejectWithValue(err.response);
    }
  }
);
