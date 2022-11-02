import "../index.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return (
    <Container>
      <div className="giphy-embed">
        <iframe
          title="welcome-gif"
          src="https://giphy.com/embed/l4JyOCNEfXvVYEqB2"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </Container>
  );
}

export default Home;
