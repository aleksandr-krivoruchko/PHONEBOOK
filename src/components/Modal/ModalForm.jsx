import { useState } from 'react';
import { Btn, FormStyle, Label, Input } from './FormStyle.styled';
// import { useUpdateContact } from '../../redux/contacts/contactsSlice';
import * as contactsOperations from '../../redux/contacts/contactsOperations';
import { useDispatch } from 'react-redux';

export function ModalForm({ contact }) {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  //   const updateContact = useUpdateContact();
  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    //  updateContact(contact.id, name, number);
    dispatch(contactsOperations.updateContact({ name, number }));
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>
        Ім'я
        <Input value={name} onChange={handleChange} type="text" name="name" />
      </Label>

      <Label>
        Номер
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
        />
      </Label>
      <Btn type="submit">Оновити контакт</Btn>
    </FormStyle>
  );
}
