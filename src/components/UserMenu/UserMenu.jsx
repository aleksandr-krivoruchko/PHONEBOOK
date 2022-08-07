import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import ukr from '../../img/ukr.png';

export function UserMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    isLoggedIn && (
      <div className="user">
        <img className="img" src={ukr} alt="" width="40px" />
        <p>{`Ласкаво просимо, ${userName.toUpperCase()}`}</p>
        <button
          type="button"
          className="logout"
          onClick={() => dispatch(authOperations.logOut())}>
          Вийти
        </button>
      </div>
    )
  );
}
