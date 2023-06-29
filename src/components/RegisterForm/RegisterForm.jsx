// import { useNavigate } from 'react-router-dom';
import css from './RegisterForm.module.css';
// import { ProgressBar } from 'react-loader-spinner';
import { register } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
// import { useState } from 'react';
import { toast } from 'react-hot-toast';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(register(formData));

    // if (formData.password !== formData.confirmPassword) {
    //   toast.error('Passwords do not match');
    //   return;
    // }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    form.reset();
  };

  return (
    <div>
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
        <button className={css.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
