import axios from 'axios';

axios.defaults.baseURL = 'https://https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function removeContact(contactId) {
  console.log('fn', contactId);
  const response = await axios.delete(`/contacts/${contactId}`);
  console.log('fn res', response.data);
  return response.data;
}
