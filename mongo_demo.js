/**
 * http://www.guru99.com/node-js-mongodb.html
 * https://mongodb.github.io/node-mongodb-native/api-articles/nodekoarticle1.html
 */

// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(err) { return console.dir(err); }
  db.collection('test', function(err, collection) {});
  db.collection('test', {w:1}, function(err, collection) {});
  db.createCollection('test', function(err, collection) {});
  db.createCollection('test', {w:1}, function(err, collection) {});
});