import { AuthNavWrapper, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavWrapper>
      <StyledLink to="/register">Registration</StyledLink>
      <StyledLink to="/login">Login</StyledLink>
    </AuthNavWrapper>
  );
};
