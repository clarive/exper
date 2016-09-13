var reg = require('cla/reg');

reg.controller('roles',{
    authenticate: true,
    handler: function(req,res){
        var db = require('cla/db');
        var roles = db.getCollection("role").find().limit(10).all();
        res.json({ roles: roles });
    }
});

reg.controller('tester-info',{
    authenticate: false,
    handler: function(req,res){
        // res.body( "hola qué 中國 " + req.username() );
        // res.body( req.args().join(',') );
        // res.body( cla.dump( req.cookies() ) );
        //res.cookie('foo', 'bar');
        // res.body( req.address() );
        //res.contentType('text/html');
        //res.contentEncoding('utf-8');
        //res.serveFile('file.txt', '/tmp/xx' );
        //res.serveFileContents('file.txt', 'qué中國c' );
        var str = '';
        var ch;
        while( ch = req.read(1) ) {
            str += ch;
        }
        res.json({ aa: 'qué 中國' + ch });
        //res.status( 404 );
        //res.body('the content you were looking for is not valid');
    }
});
