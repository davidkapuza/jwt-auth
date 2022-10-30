import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
