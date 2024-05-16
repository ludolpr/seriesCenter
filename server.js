const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");

require("dotenv").config({ path: "./config/.env" });

const { checkUser, requireAuth } = require("./middleware/authMiddleware");

const app = express();

// lire en JSON
app.use(bodyParser.json());
// lire URL
app.use(bodyParser.urlencoded({ extended: true }));
// lire les cookies
app.use(cookieParser());

// jwt
app.get("*", checkUser);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

// routes
app.use("/api/user", userRoutes);

// server
app.listen(process.env.PORT_NODE, () => {
  console.log(
    `Ludolpr: Application lancé sur le port ${
      process.env.PORT_NODE
    } ! Lancé le : ${new Date().toLocaleString()});`
  );
});