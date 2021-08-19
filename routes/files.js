const { Router } = require('express');
const filesController = require('../controllers/filesController');
const router = Router();

router.post('/', 
    filesController.upFiles
);

module.exports = router;