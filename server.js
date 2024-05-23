const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" });

const db = require("./config/db");
db.sync()
  .then(console.log("Connecté à la base de données MySQL "))
  .catch((error) => console.log(error));

const { checkUser, requireAuth } = require("./middleware/authMiddleware");

const app = express();

// config de cors
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors({}));

app.use(cors(corsOptions));
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
app.use("/api/post", postRoutes);
// server
app.listen(process.env.PORT_NODE, () => {
  console.log(
    `Ludolpr: Application lancé sur le port ${
      process.env.PORT_NODE
    } ! Lancé le : ${new Date().toLocaleString()});`
  );
});