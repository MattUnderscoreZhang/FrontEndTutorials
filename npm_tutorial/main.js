var moment = require('moment');
var unique = require('uniq');

var myDate = new Date();
var momentDate = moment(myDate).format('YYYY-MM-DD HH:mm:ss');

var myList = [1, 2, 2, 3, 4, 5, 5, 5, 6, 7];
var uniqueList = unique(myList);

console.log(momentDate);
console.log(uniqueList);
