var bodyParser = require( 'body-parser' ),
    mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/bcms' );

var Cat = mongoose.model( 'Cat', { name: String });

module.exports.initialize = function( app ) {
    app.use( bodyParser.urlencoded( {
        extended: true
    }));
    app.use( bodyParser.json() );
};

module.exports.renderNewCat = function( req, res ) {
    res.sendFile( __dirname + '/views/index.html' );
}

module.exports.createNewCat = function( req, res ) {
    var kitty = new Cat( { name: req.body.name });
    kitty.save( function( err ) {
        if( err ) console.log( err );
        res.redirect( '/' );
    });
}
