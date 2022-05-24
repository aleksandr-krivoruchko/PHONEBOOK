import { NavLink } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className="header">
      <nav className="nav wrapper">
        <div>
          <NavLink to="/" className="link">
            Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className="link">
              Contacts
            </NavLink>
          )}
        </div>
        <div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className="link">
                Register
              </NavLink>

              <NavLink to="/login" className="link">
                Login
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
