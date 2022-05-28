import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  Btn,
  FormStyle,
  Label,
  Input,
} from '../components/Form/FormStyle.styled';
import authOperations from '../redux/auth/auth-operations';

export function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    const { name, value } = e.currentTarget;

    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    //  reset();
  }

  //   function reset() {
  //     setEmail('');
  //     setPassword('');
  //   }

  return (
    <FormStyle onSubmit={handleSubmit}>
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
      <Btn type="submit">Sign in</Btn>
    </FormStyle>
  );
}
