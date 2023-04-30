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
import { FiPhone } from 'react-icons/fi';
import { MainSection } from 'components/App/App.styled';

const LoginSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required field, min 5 characters'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      logIn({
        name: values.name,
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
      <h1>Hello! Happy to see you again!</h1>
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
                <FiPhone />
              </IconUser>
              <Input type="email" name="email" />
              <Error name="email" component="div" />
            </InputContainer>
          </LabelInput>
          <LabelInput>
            <TitleLable>Password</TitleLable>
            <InputContainer>
              <IconUser>
                <FiPhone />
              </IconUser>
              <Input type="password" name="password" />
              <Error name="password" component="div" />
            </InputContainer>
          </LabelInput>
          <BtnSubmit type="submit">Log In</BtnSubmit>
        </FormWrap>
      </Formik>
    </MainSection>
  );
};
