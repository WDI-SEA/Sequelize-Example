var db = require('./models');

// --------- //
//     C     //
// --------- //
// db.user.create({
//   firstName: 'Reno',
//   lastName: 'McKenie',
//   age: 26
// }).then(function(user) {
//   console.log(user);
// });


// db.user.findOrCreate({
//   where: {
//     firstName: 'Paul',
//     lastName: 'Rudd'
//   },
//   defaults: {age: 47}
// }).spread(function(user, created) {
//   console.log(user);
// });

// --------- //
//     R     //
// --------- //
// db.user.findAll().then(function(users){
//   console.log(users);
// });

// --------- //
//     U     //
// --------- //
// db.user.update({
//   lastName: 'Taco'
// }, {
//   where: {
//     firstName: 'Reno'
//   }
// }).then(function(user) {
//   console.log(user);
// });

// --------- //
//     D     //
// --------- //
// db.user.destroy({
//   where: { firstName: 'Reno'}
// }).then(function(deletedCount) {
//   console.log('Deleted', deletedCount)
// });


// ---------------- //
//     Promises     //
// ---------------- //

// Find a user
// db.user.find({
//   where: {id: 1}
// })

// Find a user and do something with it
// db.user.findById(1).then(function(foundUser){
//   console.log(foundUser);
// });


// findOrCreate returns an array. And therefore requires something else
// It's Promise-like, but it's called spread
// db.user.findOrCreate({
//   where: { firstName: 'Peter' }
// }).spread(function(user, created) {
//   console.log(user); // returns info about the user
// });


// --------------- //
//    Validation   //
// --------------- //

// db.user.create({
//   firstName: 'Reno',
//   lastName: 'McKenie',
//   age: 26,
//   email: 'renohacks.com'
// }).then(function(user) {
//   console.log(user);
// });

// db.user.create({
//   firstName: 'Reno',
//   lastName: 'McKenie',
//   age: 26,
//   email: 'darkenvy@protonmail.com'
// }).then(function(user) {
//   console.log(user);
// });