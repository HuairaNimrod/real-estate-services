const routes = require('express').Router();

routes.use('/tenants', require('./tenants'));

module.exports = routes;