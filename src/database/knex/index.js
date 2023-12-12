const config = require("../../../knexfile");
const knex  = require("kenex");

const connection = knex(config.development);

module.exports = connection;