import { createAction } from '@reduxjs/toolkit';

//!=========Фильтрация контактов==========
export const filter = createAction('filter/filter');

// ==========Получение контактов======================
// export const fetchContactsRequest = createAction(
//   'contacts/fetchContactsRequest'
// ); //pending
// export const fetchContactsSuccess = createAction(
//   'contacts/fetchContactsSucces'
// ); //fullfilled
// export const fetchContactsError = createAction('contacts/fetchContactsError'); //rejected

// =========Добавление контакта===========
// export const addContactRequest = createAction('contacts/addContactRequest');
// export const addContactSuccess = createAction('contacts/addContactSuccess');
// export const addContactError = createAction('contacts/addContactError');

// =========Удаление контакта===========
// export const removeContactRequest = createAction(
//   'contacts/removeContactRequest'
// );
// export const removeContactSuccess = createAction(
//   'contacts/removeContactSuccess'
// );
// export const removeContactError = createAction('contacts/removeContactError');
