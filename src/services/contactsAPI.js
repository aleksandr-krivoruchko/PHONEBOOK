import axios from 'axios';

axios.defaults.baseURL = 'https://627fc0f2be1ccb0a46646711.mockapi.io';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function removeContact(contactId) {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
}
