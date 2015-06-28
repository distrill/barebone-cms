module.exports = {
    dest: __dirname + '../../public/img/postThumbnails/',
    rename: function( filedname, filename ) {
        return filename + Date.now();
    },
    onFileUploadStart: function( file ) {
        console.log( file.originalname + ' is starting... ' );
    },
    onFileUploadComplete: function( file ) {
        console.log( file.fieldname + ' uploaded to ' + file.path );
        done = true;
    }
};
