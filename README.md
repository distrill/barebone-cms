very early stages.

#### 0.1.0
Basic CRUD functionality for a simple CMS

```javascript
var express = require( 'express' ),
    barebone = require( 'barebone-cms' );

var app = express();

//  barebone-cms CRUD example usage
///////////////////////////////////////////////////////
barebone.initialize( app );

app .route( '/' )
    .get( barebone.articles.readAll );

app .route( '/newArticle' )
    .get( barebone.articles.renderNew )
    .post( barebone.articles.create );

app .route( '/article/update/:articleID' )
    .get( barebone.articles.renderUpdate )
    .post( barebone.articles.update );

app .route( '/article/delete/:articleID' )
    .get( barebone.articles.renderDelete )
    .post( barebone.articles.delete );

app .param( 'articleID', barebone.articles.byID );
///////////////////////////////////////////////////////



app.listen( 3030, '127.0.0.1' );

console.log( 'CRUD app running at http://localhost:3030/' );
```

The above example will get you a working form that connects to a mongo instance and adds a cat with the name in the form to it.

**Please note that mongodb must be installed on your machine and the daemon must be running.**
bareboneCMS takes care of configuring and connecting to the db, but the actual db software must be installed on the host machine.


#### available function calls:
after the first four lines of code above:  
```javascript
1.  barebone.articles.renderNew( req, res, optionalTemplate )
2.  barebone.article.readAll( callback, res, template ) //  function is overloaded, see docs
3.  barebone.article.readOne( callback, res, template ) //  function is overloaded, see docs
3.  barebone.articles.renderUpdate( req, res, optionalTemplate )
4.  barebone.articles.renderDelete( req, res, optionalTemplate )

5.  barebone.article.create( req, res )
7.  barebone.article.update( req, res )
8.  barebone.article.delete( req, res )

9.  barebone.article.byID( req, res )
```
In case of readAll( callback res, template ), there are two options for use. readAll( x, y z ) can be passed:  
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
