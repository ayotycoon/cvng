const express = require('express');
const router = express.Router()
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
// models
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;




module.exports = router;