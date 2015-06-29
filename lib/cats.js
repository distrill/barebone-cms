// var mongoose = require( 'mongoose' ),
var config = require( '../config/settings' ),
    Cat = require( 'mongoose' ).model( 'Cat' );

module.exports.renderNew = function( req, res, template ) {
    console.log( 'using template ' + template + ' for new cat render' );
    res.sendFile( __dirname + '/views/newCatTemplate.html' );
};

module.exports.create = function( req, res ) {
    var kitty = new Cat( { name: req.body.name });
    kitty.save( function( err ) {
        if( err ) console.log( err );
        res.send( kitty );
    });
};

module.exports.readAll = function( req, res ) {
    Cat.find( {} ).find( function( err, catResults ) {
        if( err ) {
            console.log( 'ERROR barebone-cms/lib/cat.js: ' + err );
        } else {
            if( typeof callback === 'function' ) {
                callback( catResults );
            } else {
                console.log( 'using ' + template + ' to template: ' );
                console.log( catResults );
                res.send( 'WHAT' );
            }
        }
    });
};
