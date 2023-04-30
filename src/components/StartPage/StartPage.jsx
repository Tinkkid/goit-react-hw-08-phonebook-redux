import {
  ImageHome,
  MainWrapper,
  TextHome,
  TitleHome,
  TitleWrapper,
} from 'components/StartPage/StartPage.styled';

export const StartPage = () => {
  return (
    <MainWrapper>
      <ImageHome>
        <img
          src={
            'https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          }
          alt="phonebook"
          width={'100%'}
        />
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
