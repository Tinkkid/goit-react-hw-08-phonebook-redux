import { useDispatch } from 'react-redux';
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

export const LoginForm = () => {
  const dispatch = useDispatch();

  // *alternative with setState;
  //   const [password, setPassword] = useState();
  //   const [email, setEmail] = useState();

  //   const handleChange = ({ target: { name, value } }) => {
  //     switch (name) {
  //       case 'email':
  //         return setEmail(value);
  //       case 'password':
  //         return setPassword(value);
  //       default:
  //         return;
  //     }
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    //  dispatch(authOperations.logIn({ password, email }));
    //  setPassword('');
    //  setEmail('');
  };

  return (
    <div>
      <h1>Страница логина</h1>

      <form autoComplete="off" style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>
        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
};
