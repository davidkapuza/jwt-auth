import axios from "axios";

const API_URL = "/api/auth/";

// * Sign up user

const signup = async (userData) => {
  const responce = await axios.post(API_URL, userData);

  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }

  return responce.data;
};

const authService = {
  signup,
};

export default authService;
