import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import authOperations from './redux/auth/auth-operations';

import { Section } from './components/Section/Section';
import { Layout } from './components/Layout/Layout';
import { Navigation } from './components/Navigation/Navigation';

import { ContactsPage } from './pages/ContactsPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';

import { PrivateRoute } from './pages/PrivateRoute';
import { PublicRoute } from './pages/PublicRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Navigation />
      <ToastContainer position="top-left" autoClose={3000} />

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
              <PrivateRoute navigateTo="/login">
                <Section title="Сторінка контактів">
                  <ContactsPage />
                </Section>
              </PrivateRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted navigateTo="/contacts">
                <Section title="Сторінка входу">
                  <LoginPage />
                </Section>
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute restricted navigateTo="/login">
                <Section title="Сторінка реєстрації">
                  <RegisterPage />
                </Section>
              </PublicRoute>
            }
          />

          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </>
  );
}
