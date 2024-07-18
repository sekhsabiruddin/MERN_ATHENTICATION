const express = require("express");
const app = express();
require("dotenv").config();
const dbConnect = require("./db/db");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const User = require("./controller/userController");

// Middleware
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true })); // Form data parsing

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // Allow credentials
  })
);

// All the routers
app.use("/api/user", User);

// Database connection
dbConnect();

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
