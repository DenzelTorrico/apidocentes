const express = require('express');
const teachercontroller = require("../controller/teachercontroller")
const router = express.Router()
var cors = require('cors')
var corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
router.get("/teacher",cors(corsOptions),teachercontroller.get)
router.post("/teacher",teachercontroller.post)


module.exports = router