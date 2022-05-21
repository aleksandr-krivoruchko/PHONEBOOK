import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';

import { Section } from '../Section/Section';
import { Layout } from '../Layout/Layout';
import { Navigation } from '../Navigation/Navigation';

import { ContactsPage } from '../../pages/ContactsPage';
import { LoginPage } from '../../pages/LoginPage';
import { RegisterPage } from '../../pages/RegisterPage';
import { HomePage } from '../../pages/HomePage';
import { NotFoundPage } from '../../pages/NotFoundPage';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Section title="">
                <HomePage />
              </Section>
            }
          />
          <Route
            path="contacts"
            element={
              <Section title="contacts page">
                <ContactsPage />
              </Section>
            }
          />
          <Route
            path="register"
            index
            element={
              <Section title="registration page">
                <RegisterPage />
              </Section>
            }
          />

          <Route
            path="login"
            element={
              <Section title="login page">
                <LoginPage />
              </Section>
            }
          />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
