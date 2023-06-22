import { useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
import { ProgressBar } from 'react-loader-spinner';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { signUp } from 'redux/auth/auth-operations';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    name === 'email'
      ? setEmail(value)
      : name === 'name'
      ? setName(value)
      : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    signUp({
      email,
      password,
      name,
    }).then(() => {
      toast.success('Register successfully');
      navigate('/login');
    });
  };

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
            onChange={handleChange}
            value={name}
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
            onChange={handleChange}
            value={email}
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
            onChange={handleChange}
            value={password}
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
        <button className={css.btn} type="submit">
          {/* {selectIsLoggedIn && <ProgressBar />} */}
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
