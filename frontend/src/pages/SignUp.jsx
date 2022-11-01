import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, signup } from "../modules/auth/auth-slice";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>SignUp</div>
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
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default SignUp;
