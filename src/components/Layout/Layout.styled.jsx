import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 30px 40px;
  margin: 0 auto;
  background-color: #2a2b38;
  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: 300%;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const MainContainer = styled.main`
  max-width: 1240px;
  margin: 0px auto;
  padding: 0px 140px;
`;

export const Footer = styled.footer`
  padding: 5px 0;
  text-align: center;
  margin-top: auto;
  position: fixed;
  bottom: 0;
  height: 30px;
  width: 100%;
`;

export const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
