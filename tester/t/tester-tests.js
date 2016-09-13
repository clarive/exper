
t = require('cla/t');

t.plan('skip_all');

t.subtest('sap basics', function(){
    t.ok( 1 , 'this is good' );
    t.cmpDeeply( [1,2], [1,2] );
});

t.doneTesting();

