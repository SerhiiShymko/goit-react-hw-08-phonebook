import css from './RegisterForm.module.css';
import { ProgressBar } from 'react-loader-spinner';

const RegisterForm = () => {
  return (
    <div>
      {' '}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Username"
            required
          />
        </label>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </label>
        <label className={css.label}>
          Confirm Password
          <input
            className={css.input}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
        </label>
        <button className={css.btn} type="submit" disabled={isLoading}>
          {isLoading && <ProgressBar />}
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
