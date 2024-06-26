const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

//html routes => Views => all handlebars

//http://localhost:3001/
router.use('/', homeRoutes);

//api routes

router.use('/api', apiRoutes);

module.exports = router;
