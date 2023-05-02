import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import { logIn } from 'redux/auth/authOperations';
import {
  BtnSubmit,
  Error,
  FormWrap,
  IconUser,
  Input,
  InputContainer,
  LabelInput,
  TitleLable,
} from './LoginForm.styled';
import { HiOutlineMail } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { MainSection, Title } from 'components/App/App.styled';

const LoginSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  password: yup
    .string('Enter your password')
    .min(7, 'Password should be of minimum 7 characters length')
    .required('Password is required field, min 7 characters'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => Notiflix.Notify.success('Registration is successfully!'))
      .catch(() => Notiflix.Notify.warning('Something went wrong...:('));
    console.log(values);
    resetForm();
  };

  return (
    <MainSection>
      <Title>
        Hello! <br />
        Welcome back!
      </Title>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <LabelInput>
            <TitleLable>Email</TitleLable>
            <InputContainer>
              <IconUser>
                <HiOutlineMail />
              </IconUser>
              <Input type="email" name="email" />
            </InputContainer>
            <Error name="email" component="div" />
          </LabelInput>
          <LabelInput>
            <TitleLable>Password</TitleLable>
            <InputContainer>
              <IconUser>
                <RiLockPasswordLine />
              </IconUser>
              <Input type="password" name="password" />
            </InputContainer>
            <Error name="password" component="div" />
          </LabelInput>
          <BtnSubmit type="submit">Log In</BtnSubmit>
        </FormWrap>
      </Formik>
    </MainSection>
  );
};
