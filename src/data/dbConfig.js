const knex = require('knex');
const config = require('./knexfile');
const db = knex(config.dev);
module.exports = db;
