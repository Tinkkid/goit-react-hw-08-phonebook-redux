import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { register } from 'redux/auth/authOperations';
import {
  BtnSubmit,
  Error,
  FormWrap,
  IconUser,
  Input,
  InputContainer,
  LabelInput,
  TitleLable,
} from './RegisterForm.styled';
import { FiPhone } from 'react-icons/fi';
import { MainSection } from 'components/App/App.styled';

const RegisterSchema = yup.object().shape({
  name: yup
    .string(' Name may contain only letters, apostrophe, dash and spaces.')
    .required('Name is required field.'),
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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
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
      <Formik
        initialValues={initialValues}
        validationSchema={RegisterSchema}
        onSubmit={handleSubmit}
      >
        <FormWrap autoComplete="off">
          <LabelInput>
            <TitleLable>Name</TitleLable>
            <InputContainer>
              <IconUser>
                <FiPhone />
              </IconUser>
              <Input type="text" name="name" />
            </InputContainer>
            <Error name="name" component="div" />
          </LabelInput>

          <LabelInput>
            <TitleLable>Email</TitleLable>
            <InputContainer>
              <IconUser>
                <FiPhone />
              </IconUser>
              <Input type="email" name="email" />
            </InputContainer>
            <Error name="email" component="div" />
          </LabelInput>

          <LabelInput>
            <TitleLable>Password</TitleLable>
            <InputContainer>
              <IconUser>
                <FiPhone />
              </IconUser>
              <Input type="password" name="password" />
            </InputContainer>
            <Error name="password" component="div" />
          </LabelInput>
          <BtnSubmit type="submit">Sign Up</BtnSubmit>
        </FormWrap>
      </Formik>
    </MainSection>
  );
};
