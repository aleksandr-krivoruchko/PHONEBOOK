import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { useFilter } from '../../redux/contacts/contactsSlice';

import { Contact } from '../Contact/Contact';

export function ContactsList() {
  const { filteredContacts, deleteContact } = useFilter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ number, name, id }) => (
        <Contact
          key={number}
          number={number}
          name={name}
          id={id}
          deleteContact={() => deleteContact(id)}
        />
      ))}
    </ul>
  );
}
