var config = require( '../config/settings' ),
    Article = require( 'mongoose' ).model( 'Article' ),
    fs = require ( 'fs' );

//  render nonsense
////////////////////////////////////////////////////////////////////////////////
module.exports.renderNew = function( req, res, template ) {
    console.log( 'using template ' + template + ' for new article render' );
    res.sendFile( __dirname + '/views/newArticleTemplate.html' );
};

module.exports.renderUpdate = function( req, res, template ) {
    console.log( '(CURRENTLY NOT ACTUALLY) using template ' + template + ' for update article render' );
    res.send( req.article );
};

module.exports.renderDelete = function( req, res, template ) {
    console.log( '(CURRENTLY NOT ACTUALLY) using template ' + template + ' for update article render' );
    res.send( req.article );
};


//  crud
////////////////////////////////////////////////////////////////////////////////
/******
    C
 ******/
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

/******
    R
 ******/
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
                res.send( articleResults );
            }
        }
    });
};

module.exports.readOne = function( callback, res, template ) {
    Article.findOne( {
        _id: req.article._id
    }, function( err, article ) {
        if( err ) {
            console.log( 'ERROR barebone-cms/lib/cat.js: ' + err );
        } else {
            if( typeof callback === 'function' ) {
                callback( article );
            } else {
                console.log( 'using ' + template + ' to template: ' );
                console.log( article );
                res.send( article );
            }
        }
    });
};


/******
    U
 ******/
 module.exports.update = function( req, res ) {
    var article = req.article;
    if( article ) {
        article.title = req.body.title;
        article.body = req.body.body;
        article.link = req.body.link;
        if( typeof req.files.postThumbnail !== 'undefined' ) {
            fs.unlink( ( '../public/img/postThumbnails/' + article.thumbnail ), function( err ) {
                if( err ) {
                    throw err;
                }
                console.log( 'successfully deleted ' + post.thumbnail );
            } );
            article.thumbnail = req.files.postThumbnail.name;
        } else {
            console.log( 'no thumbnail update' );
        }
        article.save( function( err ) {
            if( err ) {
                return res.status( 400 ).send( {
                    message: getErrorMessage( err )
                });
            } else {
                res.redirect( '/' );
            }
        });
    }
};

/******
    D
 ******/
module.exports.delete = function( req, res ) {
    var article = req.article;
    if( article ) {
        fs.unlink( ( '../public/img/postThumbnails/' + article.thumbnail ), function( err ) {
            if( err ) {
                console.log( err );
            }
            console.log( 'successfully deleted /public/img/postThumbnails/' + article.thumbnail );
        });
        article.remove( function( err ) {
            if( err ) {
                return res.status( 400 ).send( {
                    message: getErrorMessage( err )
                });
            } else {
                // res.redirect( '/' );
            }
        });
    }
};


//  misc (for now anyway)
////////////////////////////////////////////////////////////////////////////////
module.exports.byID = function( req, res, next, id ) {
    Article.findOne( {
        _id: id
    }, function( err, article ) {
        if( err ) {
            return next( err );
        } else {
            req.article = article;
            next();
        }
    });
};
