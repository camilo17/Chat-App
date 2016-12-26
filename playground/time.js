var moment = require('moment');


var date = moment();
// date.add(112222, 'year').subtract(9, 'months');
date.add(2, 'hour');
console.log(date.format('h:mm a'));



var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
