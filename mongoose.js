var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    connect: function () {
        mongoose.connect('mongodb://localhost/ENTR')
            .then(() => console.log('connection succesful'))
            .catch((err) => console.error(err));
    }
};