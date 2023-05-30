const mongoose = require('mongoose');
const dbConfig = require('../config/db.config');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.hero = require("./heroes.model.js")(mongoose);

module.exports = db;