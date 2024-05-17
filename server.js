const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const methodOverride = require("method-override");

const db = require("./config/db");
db.sync()
  .then(console.log("Connecté à la base de données MySQL "))
  .catch((error) => console.log(error));

require("dotenv").config({ path: "./config/.env" });

const { checkUser, requireAuth } = require("./middleware/authMiddleware");

const app = express();
app.use(methodOverride("_method"));
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
app.use("/api/user", authRoutes);

// server
app.listen(process.env.PORT_NODE, () => {
  console.log(
    `Ludolpr: Application lancé sur le port ${
      process.env.PORT_NODE
    } ! Lancé le : ${new Date().toLocaleString()});`
  );
});