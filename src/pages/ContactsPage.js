import { Form } from '../components/Form/Form';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/Filter/Filter';

export function ContactsPage() {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
}
