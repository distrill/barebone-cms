var bodyParser = require( 'body-parser' ),
    mongoose = require( 'mongoose' );

mongoose.connect( 'mongodb://localhost/bcms' );

var Cat = mongoose.model( 'Cat', { name: String });

module.exports.initialize = function( app ) {
    app.use( bodyParser.urlencoded( {
        extended: true
    }));
    app.use( bodyParser.json() );

    app.set( 'views', __dirname +'/views' );
    app.set( 'view engine', 'ejs' );
};

module.exports.renderNewCat = function( req, res ) {
    res.render( 'index', {} );
}

module.exports.createNewCat = function( cat ) {
    var kitty = new Cat( { name: cat.name });
    kitty.save( function( err ) {
        if( err ) console.log( err );
        console.log( 'new motherfucking cat like a motherfucker' );
    });
}
