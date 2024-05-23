const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const bcrypt_salt = 10;
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_SECRET, {
    expiresIn: maxAge,
  });
};

// register
module.exports.signUp = async (req, res) => {
  console.log("test postman:", req.body);
  const { nameUser, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, bcrypt_salt);
    const user = await userModel.create({
      nameUser,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ user: user.idUser });
  } catch (err) {
    // const errors = signUpErrors(err);
    // res.status(200).send({ errors });
    res.status(200).send(err);
  }
};

// login
module.exports.signIn = async (req, res) => {
  console.log("register", req.body);
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = createToken(user.idUser);
    console.log("token", token, email, password);

    res.cookie("jwt", token, { httpOnly: true, maxAge });
    res.status(200).json({ user: user.idUser });
  } catch (err) {
    console.log("Error occurred:", err);

    res.status(400).json({ error: err.message });
  }
};

// logout
module.exports.logout = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
};
