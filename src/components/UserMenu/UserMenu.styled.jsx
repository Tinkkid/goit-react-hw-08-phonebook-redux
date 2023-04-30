import styled from '@emotion/styled';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const UserMenuText = styled.p`
  color: #c4c3ca;
  font-size: 20px;
`;

export const UserIcon = styled.i`
  position: relative;
  margin-left: 4px;
  top: 0;
  font-size: 28px;
`;

export const BtnSubmit = styled.button`
  border-radius: 4px;
  font-size: 20px;
  transition: all 200ms linear;
  padding: 2px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  cursor: pointer;
  background-color: #ffeba7;
  color: #102770;
  box-shadow: 0 8px 24px 0 rgba(255, 235, 167, 0.2);

  &:focus,
  &:hover {
    background-color: #102770;
    color: #ffeba7;
    box-shadow: 0 8px 24px 0 rgba(16, 39, 112, 0.2);
  }
`;
