import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function updateContact(contactId, newContact) {
  const response = await axios.put(`/contacts/${contactId}`, newContact);
  return response.data;
}

export async function removeContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}
