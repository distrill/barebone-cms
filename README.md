very early stages.

#### 0.0.5
## working proof of concept!
there is not very much in the way of flexibility at this point, and really only one feature is working, but we'll take it for the time being.

```javascript
var express = require( 'express' ),
    bareboneCMS = require( 'barebone-cms' );

var app = express();

bareboneCMS.initialize( app );

app.get( '/', function( req, res ) {
    bareboneCMS.renderNewCat( req, res );
});
app.post( '/', function( req, res ) {
    bareboneCMS.createNewCat( req, res );
});

app.listen( 3030, '127.0.0.1' );

console.log( 'temp app running at http://localhost:3030/' );
```

the above example will get you a working form that connects to a mongo instance and adds a cat with the name in the form to it.

**PLEASE NOTE that mongodb must be installed on your machine and the daemon must be running.**
bareboneCMS takes care of configuring and connecting to the db, but the actual db software must be installed on the host machine.

many more cool things to come. neat practice package for now :)



why my own CMS?
mostly a learning exercise.
but also sometimes it seems like wordpress is a little overkill.
so is squarespace.
come on those have learning curves as steep as programming in the first place.

i've been working with node lately, and the whole MEAN stack, and i just needed a very simple
barebones
content management system that does nothing but that-- manages content.
