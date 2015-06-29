var mongoose = require( 'mongoose' );

module.exports = function() {
    mongoose.connect( 'mongodb://localhost/bcms' );
    require( '../lib/models/article.model.js' );
    require( '../lib/models/cat.model.js' );
};
