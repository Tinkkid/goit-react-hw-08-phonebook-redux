import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Footer, FooterLink, MainContainer, Section } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Section>
        <AppBar />
      </Section>
      <Suspense fallback={<Loader />}>
        <MainContainer>
          <Outlet />
        </MainContainer>
        <Footer>
          <FooterLink
            href="https://github.com/Tinkkid?tab=repositories"
            target="_blank"
            rel="noopener"
          >
            Copyright &copy; Created by Yuliia Kostovynska 2023. Ukraine
          </FooterLink>
        </Footer>
      </Suspense>
    </>
  );
};
