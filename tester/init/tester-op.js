var reg = require('cla/reg');

reg.register('service.tester.operation', {
    name: 'Tester Operation',
    icon: '/plugin/tester/images/tester.png',
    form: '/plugin/tester/forms/tester-transport.js',
    handler: function(ctx,config){

        print("Hello tester, testerfield=" + config.testerfield );

        var log = require('cla/log');
        log.warn("This is done");
    }
});
