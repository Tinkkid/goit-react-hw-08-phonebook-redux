import {
  ImageHome,
  MainWrapper,
  TextHome,
  TitleHome,
  TitleWrapper,
} from 'components/StartPage/StartPage.styled';
import cat from '../../cat.jpeg';

export const StartPage = () => {
  return (
    <MainWrapper>
      <ImageHome>
        <img src={cat} alt="phonebook" width={'100%'} />
      </ImageHome>
      <TitleWrapper>
        <div>
          {' '}
          <TitleHome>My Phonebook</TitleHome>
          <TextHome>
            For work with your contacts list sign up or log in
          </TextHome>
        </div>
      </TitleWrapper>
    </MainWrapper>
  );
};
