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

// * Sign in user

const signin = async (userData) => {
  const responce = await axios.post(API_URL + "login", userData);

  if (responce.data) {
    localStorage.setItem("user", JSON.stringify(responce.data));
  }

  return responce.data;
};

// * Log out user

const logout = async () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  signin,
  logout,
};

export default authService;
