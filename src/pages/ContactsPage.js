import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

export function ContactsPage() {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList></ContactsList>
      <ToastContainer position="top-left" autoClose={3000} />
    </>
  );
}
