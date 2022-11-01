import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../modules/auth/auth-slice";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/sign-in");
  };

  return (
    <nav className="header">
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>Log out</button>
          </li>
        ) : (
          <li>
            <Link to="/sign-in">Auth</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
