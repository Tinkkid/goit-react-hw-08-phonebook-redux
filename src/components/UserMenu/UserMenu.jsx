import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';
import { logOut } from 'redux/auth/authOperations';
import {
  BtnSubmit,
  UserIcon,
  UserMenuText,
  UserMenuWrapper,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserMenuText>Welcome, {user.name}</UserMenuText>
      <BtnSubmit type="button" onClick={() => dispatch(logOut())}>
        Log Out
        <UserIcon>
          <LogoutIcon />
        </UserIcon>
      </BtnSubmit>
    </UserMenuWrapper>
  );
};
