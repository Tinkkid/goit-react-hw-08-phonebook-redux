import { useSelector } from 'react-redux';
import { HiHome } from 'react-icons/hi';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Nav>
      <StyledLink to="/">
        <HiHome size="20" />
        <p style={{ lineHeight: 0 }}>Home</p>
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
