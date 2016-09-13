var ci = require('cla/ci');

ci.createClass('TesterSystem',{
    icon: '/images/tester.png',
    has: {
        SID: { is: 'rw', isa: 'Str', required: true }
    },
});
