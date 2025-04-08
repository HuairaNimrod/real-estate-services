const routes = require('express').Router();
const tenantsController = require('../controllers/tenants');

routes.get('/', tenantsController.getClients);
routes.post('/', tenantsController.createClient)

module.exports = routes;