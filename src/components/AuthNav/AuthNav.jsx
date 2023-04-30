import { AuthNavWrapper, StyledLink } from './AuthNav.styled';
import { MdAppRegistration } from 'react-icons/md';

import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledLink to="/register">
        <p>Sign Up</p> <MdAppRegistration size="24" />
      </StyledLink>
      <StyledLink to="/login">
        <p>Login</p>
        <LoginIcon size="24" />
      </StyledLink>
    </AuthNavWrapper>
  );
};
