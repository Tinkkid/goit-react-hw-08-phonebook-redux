import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #c4c3ca;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: #ffeba7;
  }
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
