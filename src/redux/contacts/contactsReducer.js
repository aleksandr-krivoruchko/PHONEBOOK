import { combineReducers, createReducer, createAction } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => {
    console.log(action.payload);

    return [...state, action.payload];
  },
  [removeContact.fulfilled]: (state, action) => {
    console.log(action.payload);
    return state.filter(item => item.id !== action.payload.id);
  },
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, action) => action.payload,
  [addContact.pending]: () => null,
  [removeContact.rejected]: (_, action) => action.payload,
  [removeContact.pending]: () => null,
});

export const filter = createAction('filter/filter');

export const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  error,
});
