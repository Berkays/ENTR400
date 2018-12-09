var express = require('express');
var router = express.Router();

var passport = require('passport');
var User = require('../models/User');

/* GET login page. */
router.get('/register', function (req, res, next) {
    res.render('register', { title: 'Express' });
});

router.post('/register', function (req, res, next) {
    User.register(new User({ username: req.body.username, email: req.body.email}), req.body.password, function (err, user) {
        if (err) {
            return res.render('register', { user: user });
        }

        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

module.exports = router;
