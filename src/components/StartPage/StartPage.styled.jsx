import styled from '@emotion/styled';

export const MainWrapper = styled.section`
  display: flex;
  margin-top: 90px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const TitleWrapper = styled.div`
  background-color: #2a2b38;
  opacity: 0.9;
  padding: 40px 30px;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  width: 60%;
`;

export const TitleHome = styled.h1`
  margin-bottom: 24px;

  color: #ffeba7;
  font-size: 40px;
  font-weight: 700;
  text-align: center;
`;

export const TextHome = styled.h2`
  margin-bottom: 20px;
  color: #c4c3ca;
  text-align: center;
`;

export const ImageHome = styled.div`
  /* background: #000; */
  /* background-color: red; */
  /* background-image: url('https://www.pexels.com/photo/an-island-with-cottages-and-beach-chairs-1174732/'); */
  /* padding: 40px 0; */
  /* background-position: bottom center;
  background-repeat: no-repeat; */
  width: 40%;
`;

export const BtnHome = styled.button`
  border-radius: 4px;
  height: 44px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 200ms linear;
  padding: 0 30px;
  letter-spacing: 1px;
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

export const LinkHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const LinkText = styled.h2`
  color: #c4c3ca;
  text-align: center;
`;
