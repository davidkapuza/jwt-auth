import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../modules/auth/auth-slice";
import AuthForm from "../modules/auth/components/AuthForm";

function SignUp() {
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
    console.log(e, data);
    e.preventDefault();
    dispatch(register(data));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box display="flex" minHeight="100vh">
      <Box width={400} mt="20%" mx="auto">
        <Typography align="center" pb="2em">
          Register
        </Typography>
        <AuthForm onSubmit={onSubmit} formFor="register" />
      </Box>
    </Box>
  );
}

export default SignUp;
