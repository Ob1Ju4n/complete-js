var moment = require('moment');
// //console.log(moment().format('YYYY-MM-DD[T]HH:mm:ss'));
// var startDateTime = moment('10/31/2017 07:00:00', 'MM/DD/YYYY HH:mm:ss').format('HH:mm');
// var endDateTime = moment('10/31/2017 18:00:00', 'MM/DD/YYYY HH:mm:ss').format('HH:mm');
//
// console.log('Show: ' + startDateTime + "\nLeave: " + endDateTime);
// console.log("Javascript timestamp: " + new Date().valueOf().toString().length);
console.log("Javascript timestamp: " + new Date().valueOf());

console.log("Shared in proper format: " + moment().subtract(1, 'days').valueOf());
console.log("Favorites in proper format: " + moment().subtract(60, 'days').valueOf());

console.log("Shared in wrong UNIX format: " + moment().subtract(3, 'days').unix());
console.log("Favorites in wrong UNIX format: " + moment().subtract(60, 'days').unix());
