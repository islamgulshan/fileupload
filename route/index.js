var express= require('express');

var router = express.Router();

const fileController= require('../controllers/fileController');

router.post('/photo',fileController.photo);
router.post('/galary',fileController.galary);

module.exports = router;
