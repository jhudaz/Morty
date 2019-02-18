const express = require('express');
const ProvidersController = require('./ProvidersController');
const router = express.Router();

router.get('/', ProvidersController.getProviders);
router.put('/', ProvidersController.putProviders);
router.post('/', ProvidersController.postProviders);
router.delete('/', ProvidersController.deleteProviders);

module.exports = router;