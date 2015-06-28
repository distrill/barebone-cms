var mongoose = require( 'mongoose' ),
    config = require( '../config/settings' ),
    Article = mongoose.model( 'Article', config.article );

module.exports.renderNew = function( req, res, template ) {
    console.log( 'using template ' + template + ' for new article render' );
    res.sendFile( __dirname + '/views/newArticleTemplate.html' );
};

module.exports.create = function( req, res ) {
    var newArticle = new Article( req.body );
    newArticle.thumbnail = req.files.postThumbnail.name;
    newArticle.save( function( err ) {
        if( err ) {
            return res.status( 400 ).send( {
                message: getErrorMessage( err )
            });
        } else {
            res.redirect( '/' );
        }
    });
};


//  this function is overloaded. i'm not sure if this is horrible practice?
//  currently, if they pass a callback, they can use the results however they want
//      (ie send them wherever, template engine etc)
//  otherwise, if they pass the header response object, and a template of their choosing
//  then the template will be rendered however wth the results
//      (note, clearly no template rendering yet, just testing function overload)
module.exports.readAll = function( callback, res, template ) {
    Article.find( {} ).find( function( err, articleResults ) {
        if( err ) {
            console.log( 'ERROR barebone-cms/lib/cat.js: ' + err );
        } else {
            if( typeof callback === 'function' ) {
                callback( articleResults );
            } else {
                console.log( 'using ' + template + ' to template: ' );
                console.log( articleResults );
                res.send( 'WHAT' );
            }
        }
    });
};
