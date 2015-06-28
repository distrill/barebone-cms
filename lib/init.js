var bodyParser = require( 'body-parser' ),
    mongoose = require( 'mongoose' ),
    multer = require( 'multer' ),
    config = require( '../config/settings' );

module.exports = function( app ) {
    mongoose.connect( config.db );
    app.use( multer( config.multer ));
    app.use( bodyParser.urlencoded( {
        extended: true
    }));
    app.use( bodyParser.json() );
};
