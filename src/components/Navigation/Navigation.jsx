import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import {
  ImHome3,
  ImAddressBook,
  ImUserPlus,
  ImUserCheck,
} from 'react-icons/im';
export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header">
      <nav className="nav wrapper">
        <div>
          <NavLink to="/" className="link">
            <ImHome3 />
            Головна
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink to="/contacts" className="link">
                <ImAddressBook />
                Контакти
              </NavLink>
            </>
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className="link">
                <ImUserPlus />
                Реєстрація
              </NavLink>
              <NavLink to="/login" className="link">
                <ImUserCheck />
                Увійти
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
