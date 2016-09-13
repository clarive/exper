(function(params){

    var testerfield = new Ext.form.TextField({
        name: 'testerfield',
        fieldLabel: _('Tester Field'),
        value: params.data.testerfield || 'nothing'
    });

    return [
       testerfield
    ];
});
