/*
*Without using underscore
*/



var fs = require('fs');


var input = process.argv[2];
var output = process.argv[3];

var data = fs.readFile('./data.csv', 'utf-8', function(e, d) {
    if(e){throw e;}
    CTJ(d);

});


function CTJ(file) {
    console.log('FILE: ', file, '\n');
    var aR = file.split('\n'),
        head = aR[0].split(',');
    aR.shift();
    var JS = [];
    console.log(aR);
    for(var i= 0; i<aR.length; i++){
        for(var j=0; j<head.length; j++){
            var val = aR[i].split(",")[j];
            var key = head[j];
            var obj = {};
            for (var k=0; k<head.length; k++){
                obj[key] = val;
                JS.push(obj);
            }
        }
    }

    console.log(JS);

}
