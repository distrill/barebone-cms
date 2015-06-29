var mongoose = require( 'mongoose' ),
    Schema = mongoose.Schema;

var CatSchema = new Schema( {
    name: String
});

mongoose.model( 'Cat', CatSchema );
