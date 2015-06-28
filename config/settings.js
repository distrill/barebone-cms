module.exports = {
    db: 'mongodb://localhost/bcms',
    article: require( '../lib/models/article.model.js' ),
    cat: require( '../lib/models/cat.model.js' ),
    multer: require( './multer.js' )
};
