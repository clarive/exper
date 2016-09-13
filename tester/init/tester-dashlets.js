var reg = require('cla/reg');


reg.register('dashlet.tester.hello', {
    name: 'Tester Hello World Dashlet',
    icon: '/plugin/tester/images/tester.png',
    form: '/plugin/tester/dashlets/tester-config.js',
    js_file: '/plugin/tester/dashlets/hello.js'
});

reg.register('dashlet.tester.table', {
    name: 'Tester Data Table Dashlet',
    icon: '/plugin/tester/images/tester.png',
    form: '/plugin/tester/dashlets/tester-config.js',
    js_file: '/plugin/tester/dashlets/table.js'
});

reg.register('dashlet.tester.c3chart', {
    name: 'Tester C3 Timeline',
    icon: '/plugin/tester/images/tester.png',
    form: '/plugin/tester/dashlets/tester-config.js',
    js_file: '/plugin/tester/dashlets/c3-chart.js'
});

