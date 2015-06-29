var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema( {
    date: {
        type: Date,
        default: Date.now()
    },
    title: String,
    body: String,
    link: String,
    thumbnail: String
});

mongoose.model( 'Article', ArticleSchema );
