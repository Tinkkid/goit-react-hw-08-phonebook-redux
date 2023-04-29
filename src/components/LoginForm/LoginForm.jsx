import { useDispatch } from 'react-redux';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
import { logIn } from 'redux/auth/authOperations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LoginSchema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required field.'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 5 characters length')
    .required('Password is required field'),
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
    <div>
      <h1>Страница регистрации</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form style={styles.form} autoComplete="off">
          <label style={styles.label}>
            Почта
            <Field type="email" name="email" />
            <ErrorMessage name="email" />
          </label>

          <label style={styles.label}>
            Пароль
            <Field type="password" name="password" />
            <ErrorMessage name="password" />
          </label>
          <button type="submit">Зарегистрироваться</button>
        </Form>
      </Formik>
    </div>
  );
};
