very early stages.

#### 0.0.7
There is not very much in the way of flexibility at this point, and really only one feature is working, but we'll take it for the time being.

```javascript
var express = require( 'express' ),
    barebone = require( 'barebone-cms' );

var app = express();

barebone.initialize( app );

app.get( '/', function( req, res ) {
    barebone.articles.readAll( function( results ) {
        res.send( results );
    });
});
app.get( '/newArticle', function( req, res ) {
    barebone.articles.renderNew( req, res );
});
app.post( '/newArticle', function( req, res ) {
    barebone.articles.create( req, res );
});

app.listen( 3030, '127.0.0.1' );

console.log( 'temp app running at http://localhost:3030/' );
```

The above example will get you a working form that connects to a mongo instance and adds a cat with the name in the form to it.

**Please note that mongodb must be installed on your machine and the daemon must be running.**
bareboneCMS takes care of configuring and connecting to the db, but the actual db software must be installed on the host machine.


#### available function calls:
after the first four lines of code above:  
```javascript
1.  barebone.article.readAll( callback, res, template ) // function is overloaded, see docs
2.  barebone.article.renderNew( req, res, template )
3.  barebone.article.create( req, res )


4.  barebone.cat.readAll( callback, res, template ) // function is overloaded, see docs
5.  barebone.cat.renderNew( req, res, template )
6.  barebone.cat.create( req, res )
```
In both cases of readAll( callback res, template ), there are two options for use. readAll( x, y z ) can be passed:  
-a callback function with a single parameter, the parameter is json object of the results.  
OR  
-res and req objects, followed by a template (containing appropriate template logic ie ejs with appropriate fields).

..  

why my own CMS?
mostly a learning exercise.
but also sometimes it seems like wordpress is a little overkill.
so is squarespace.
come on those have learning curves as steep as programming in the first place.

i've been working with node lately, and i just needed a very simple  
**barebones**  
content management system that does nothing but that-  
manages content.
