import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Btn,
  FormStyle,
  Label,
  Input,
} from '../components/Form/FormStyle.styled';
import authOperations from '../redux/auth/auth-operations';

export function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    //  reset();
  }

  //   function reset() {
  //     setName('');
  //     setEmail('');
  //     setPassword('');
  //   }

  return (
    <FormStyle onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoComplete="off"
        />
      </Label>

      <Label>
        Email
        <Input
          value={email}
          onChange={handleChange}
          type="email"
          name="email"
          required
          autoComplete="off"
        />
      </Label>

      <Label>
        Password
        <Input
          value={password}
          onChange={handleChange}
          type="password"
          name="password"
          required
          autoComplete="off"
        />
      </Label>

      <Btn type="submit">Sign up</Btn>
    </FormStyle>
  );
}
