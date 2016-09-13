(function(params){

    var id = params.id_div;
    var jq = $('#'+id);

    Cla.ajax_json('/plugin/tester/roles', {}, function(res){
        var html = function(){/*
            <div id="boot">
            <table class="table table-striped" style="height: 100%">
                <tr><th>Role Name</th></tr>
                [% for( var i=0; i<roles.length; i++) { %]
                      <tr><td>[%= roles[i].role %]</td></tr>
                [% } %]
            </table>
            </div>
        */}.tmpl(res);

        jq.html( html );
    });
})

