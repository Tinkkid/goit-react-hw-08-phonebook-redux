import { AuthNavWrapper, StyledLink } from './AuthNav.styled';
import { MdAppRegistration } from 'react-icons/md';

import LoginIcon from '@mui/icons-material/Login';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledLink to="/register">
        <p style={{ lineHeight: 0 }}>Sign Up</p> <MdAppRegistration size="24" />
      </StyledLink>
      <StyledLink to="/login">
        <p style={{ lineHeight: 0 }}>Log in</p>
        <LoginIcon size="24" />
      </StyledLink>
    </AuthNavWrapper>
  );
};
