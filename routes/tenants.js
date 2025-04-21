const routes = require('express').Router();
const tenantsController = require('../controllers/tenants');

routes.get('/', tenantsController.getClients);
routes.post('/', tenantsController.createClient);
routes.put('/:id', tenantsController.updateClient);
routes.delete('/:id', tenantsController.deleteClient);

module.exports = routes;