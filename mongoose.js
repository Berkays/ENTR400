var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
    connect: function () {
        mongoose.connect('mongodb://localhost/ENTR',{ useNewUrlParser:true })
            .then(() => console.log('DB Connection Succesful.'))
            .catch((err) => console.error("DB Connection Failed."));
    }
};