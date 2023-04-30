import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { UserMenuText, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </button>
    </UserMenuWrapper>
  );
};
