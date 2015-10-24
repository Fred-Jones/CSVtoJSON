/*
* Node cli for converting .csv files into JSON.
* Usage:
* node cli.js <data.csv> <output.json>
*/

var _ = require('underscore');
var fs = require('fs');
var data = fs.readFile(process.argv[2], 'utf-8', function(e, d) {
    CTJ(d);
});
function CTJ(file) {
    var list = file.split('\n');
    var head = list[0].split(',');
    var data = list.slice(1, list.length);
    res = [];
    for(var i=0; i<data.length; i++){
       res.push(_.object(head, data[i].split(',')));
    }
    fs.writeFile(process.argv[3], JSON.stringify(res), function(e) {
        if(e){throw e;}
        console.log('Converted ', process.argv[2], ' and saved to:', process.argv[3]);
    });
    console.log(JSON.stringify(res));
}
