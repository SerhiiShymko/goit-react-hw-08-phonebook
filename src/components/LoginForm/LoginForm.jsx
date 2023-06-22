import React, { useState } from 'react';
import css from './LoginForm.module.css';
import { ProgressBar } from 'react-loader-spinner';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
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
        <button className={css.button}>
          {/* {isLoading && <ProgressBar />} */}
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
