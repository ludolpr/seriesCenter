const bcrypt = require("bcrypt");
const bcrypt_salt = 10;
const jwt = require("jsonwebtoken");

const connectDB = require("../config/config.js");
const router = require("express").Router();

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// register
module.exports.signUp = async (req, res) => {
  const { nameUser, email, password, confPassword } = req.body;
  // const checkEmail = await connectDB.query(`SELECT email FROM users`);
  const checkName = await connectDB.query(`SELECT nameUser FROM users`);
  if (password !== confPassword) return res.redirect("/");
  if (nameUser === "" || email === "") {
    res.redirect("/");
  } else if (email === checkEmail || nameUser === checkName) {
    res.redirect("/");
  } else if (password === confPassword) {
    const newUser = await connectDB.query(
      `INSERT INTO users name="${nameUser}", email="${email}", password="${await bcrypt.hash(
        password,
        bcrypt_salt
      )}`
    );
    const [users] = await connectDB.query(
      `SELECT * FROM users WHERE id = ${newUser.insertId}`
    );
    const token = createToken(user.idUser);
    console.log("token", token, email, password);
    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: users.idUser });
  }
};

// login

// logout
module.exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
