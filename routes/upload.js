var express = require('express');
var router = express.Router();

//multer object creation
var multer  = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('upload', { title: 'Upload', message:'' });
});

router.post('/', upload.single('imageupload'),function(req, res) {
    res.render('upload', { title: 'Upload', message:'File upload sucessfully.' });
});

module.exports = router;
