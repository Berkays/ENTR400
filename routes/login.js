var express = require('express');
var router = express.Router();

var passport = require('passport');

/* GET login page. */
router.get('/login', function (req, res, next) {
    res.render('login', { title: 'İŞÇATAN Giriş' });
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local',{
        failureRedirect: '/login',
        failureFlash: true 
    })(req, res, function () {
            res.redirect('/');
        });
});

module.exports = router;
