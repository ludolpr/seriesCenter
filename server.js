const express = require("express");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/userRoutes")

require("dotenv").config({path: "./config/.env"})