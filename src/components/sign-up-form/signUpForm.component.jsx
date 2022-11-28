import React, { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h2>Sign Up Form</h2>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          value={displayName}
          onChange={handleChange}
          name="displayName"
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          required
          name="email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChange}
          required
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          required
          name="confirmPassword"
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
