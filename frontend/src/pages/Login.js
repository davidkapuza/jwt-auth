import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { reset, login } from "../modules/auth/auth-slice";
import AuthForm from "../modules/auth/components/AuthForm";
import { CircularProgress, Typography, Box } from "@mui/material";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onSubmit = (e, data) => {
    e.preventDefault();
    dispatch(login(data));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" minHeight="100vh">
      <Box width={400} mt="20%" mx="auto">
        <Typography align="center" pb="2em">
          Login
        </Typography>
        <AuthForm onSubmit={onSubmit} formFor="login" />
      </Box>
    </Box>
  );
}

export default SignIn;
