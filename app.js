const express = require('express');
const app = express();
const router = require("./routes/teacher");
const bodyParser  = require('body-parser');

//app.use(cors()) // Use this after the variable declarationapp.use(express.json());
app.use(bodyParser.json())
app.use("/api",router)



module.exports = app