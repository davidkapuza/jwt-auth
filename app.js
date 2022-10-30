const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const SECRET_KEY = "mock_secret_key";

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "Post created",
        authData,
      });
    }
  });
});

app.post("/api/login", (req, res) => {
  // Mock usr
  const user = {
    id: 1,
    username: "tom",
    email: "tom@gmail.com",
  };
  jwt.sign({ user }, SECRET_KEY, {expiresIn: "30s"},(err, token) => {
    res.json({
      token,
    });
  });
});

// * FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(5000, () => console.log("server started at 5000"));
