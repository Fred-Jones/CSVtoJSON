/*
* Functioning module with underscore
*
*/

var _ = require('underscore');
var fs = require('fs');

var data = fs.readFile('./data.csv', 'utf-8', function(e, d) {
    CTJ(d);
});

function CTJ(file) {
    var list = file.split('\n');
    var head = list[0].split(',');
    var data = list.slice(1);
    console.log(data);
    res = [];
    for(var i=0; i<data.length; i++){
       res.push(_.object(head, data[i].split(',')));
    }
    console.log(res);
}
