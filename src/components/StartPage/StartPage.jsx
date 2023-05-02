import {
  BtnHome,
  ImageHome,
  LinkHome,
  LinkText,
  MainWrapper,
  TextHome,
  TitleHome,
  TitleWrapper,
} from 'components/StartPage/StartPage.styled';
import { Link } from 'react-router-dom';

export const StartPage = () => {
  return (
    <MainWrapper>
      <ImageHome>
        <img
          src={
            'https://cdn.pixabay.com/photo/2015/01/25/21/02/phone-612061_960_720.jpg'
          }
          alt="phonebook"
          width={'100%'}
          height={'100'}
          style={{ opacity: 0.7 }}
        />
      </ImageHome>
      <TitleWrapper>
        <div>
          {' '}
          <TitleHome>MY PHONEBOOK</TitleHome>
          <TextHome>Easy save, find, and edit your contacts.</TextHome>
          <TextHome>To get started, please sign up or log in</TextHome>
          <LinkHome>
            <Link to="/register">
              <BtnHome>Sign up</BtnHome>
            </Link>
            <LinkText>or</LinkText>
            <Link to="/login">
              <BtnHome>Log in</BtnHome>
            </Link>
          </LinkHome>
        </div>
      </TitleWrapper>
    </MainWrapper>
  );
};
