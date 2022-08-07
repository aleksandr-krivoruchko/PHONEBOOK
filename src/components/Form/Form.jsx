import { useState } from 'react';
import { Btn, FormStyle, Label, Input } from './FormStyle.styled';
import { useAddContact } from '../../redux/contacts/contactsSlice';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const addContact = useAddContact();

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

    addContact(name, number);

    reset();
  }

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>
        Ім'я
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Ім’я може містити лише літери, апостроф, тире та пробіли. Наприклад, Тарас Шевченко"
          required
          autoComplete="off"
        />
      </Label>

      <Label>
        Номер
        <Input
          value={number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефону має складатися з цифр і може містити пробіли, тире, дужки та починатися з +"
          required
          autoComplete="off"
        />
      </Label>
      <Btn type="submit">Додати контакт</Btn>
    </FormStyle>
  );
}
