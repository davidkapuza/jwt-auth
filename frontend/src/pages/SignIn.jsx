import { useState } from "react";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>SignIn</div>
      <form onSubmit={onSubmit}>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email"
          onChange={onChange}
          value={email}
        ></input>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={onChange}
          value={password}
        ></input>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}

export default SignIn;
