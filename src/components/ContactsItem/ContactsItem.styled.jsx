import styled from '@emotion/styled';

export const ContactsItemWrap = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px; */
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
`;

export const Name = styled.div`
  margin-bottom: 10px;
  min-width: 188px;
  font-size: 18px;
  padding: 7px 10px;
  color: #c4c3ca;
`;
export const Number = styled.div`
  margin-bottom: 10px;
  min-width: 188px;
  font-size: 18px;
  color: #c4c3ca;
  padding: 7px 10px;
`;

export const BtnIcon = styled.button`
  border-radius: 4px;
  font-size: 12px;
  margin-bottom: 10px;
  transition: all 200ms linear;
  padding: 6px 4px;
  display: inline-flex;
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

export const Form = styled.form`
  display: flex;
  gap: 15px;
`;

export const ListWrap = styled.div`
  display: flex;
  gap: 15px;
`;

export const Input = styled.input`
  border: 0;
  margin-bottom: 10px;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 18px;
  color: #c4c3ca;
  padding: 7px 10px;
  background: #1f2029;
  opacity: 0.5;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 10px;
  height: fit-content;
`;
