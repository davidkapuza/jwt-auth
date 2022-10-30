const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/home", require("./routes/homeRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.use(errorHandler);

app.listen(port, () => `Server started on port ${port}`);
