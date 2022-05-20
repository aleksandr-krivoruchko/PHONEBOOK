import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as contactsActions from './contactsActions';
import { fetchContacts, addContact, removeContact } from './contactsOperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addContact.fulfilled]: (state, action) => [...state, action.payload],
  [removeContact.fulfilled]: (state, action) => {
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

export const filterReducer = createReducer('', {
  [contactsActions.filter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  error,
});
//=========================================================
// const items = createReducer([], {
//   [contactsActions.fetchContactsSuccess]: (_, action) => action.payload,
//   [contactsActions.addContactSuccess]: (state, action) => [
//     ...state,
//     action.payload,
//   ],
//   [contactsActions.removeContactSuccess]: (state, action) => {
//     return state.filter(item => item.id !== action.payload.id);
//   },
// });
