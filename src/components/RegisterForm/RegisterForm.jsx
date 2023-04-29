import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <label style={styles.label}>
          Имя
          <input type="text" name="name" />
        </label>

        <label style={styles.label}>
          Почта
          <input type="email" name="email" />
        </label>

        <label style={styles.label}>
          Пароль
          <input type="password" name="password" />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};
