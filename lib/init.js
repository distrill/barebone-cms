var bodyParser = require( 'body-parser' ),
    multer = require( 'multer' ),
    config = require( '../config/settings' );

require( '../config/mongoose.js' )();

module.exports = function( app ) {
    app.use( multer( config.multer ));
    app.use( bodyParser.urlencoded( {
        extended: true
    }));
    app.use( bodyParser.json() );
};
