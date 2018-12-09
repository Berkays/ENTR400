var express = require('express');
var router = express.Router();

/* GET About page. */
router.get('/about', function (req, res, next) {
    res.render('about', { title: 'İŞÇATAN Hakkımızda', user: req.user });
});

module.exports = router;
