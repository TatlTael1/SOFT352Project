var MongoClient = require('mongodb').MongoClient
  , assert = require('assert'); //Require the MongoDB client and assert for error checking

// Connection URL
var url = 'mongodb://localhost:27017/SOFT352Project'; //Connect to the database named SOFT352Project (created if it doesn't exist)

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  insertDocuments(db, function() { //Calls the insertDocuments function
    db.close(); //Close the database connection when it is done
  });
});

var insertDocuments = function(db, callback) { //function to insert the documents into the collection
  // Get the documents collection
  var collection = db.collection('shop'); //Use the collection called shop (created if it doesn't exist)
  // Insert some documents
  collection.insertMany([ //insertMany inserts multiple documents into the collection
    {a : 1, itemName : "Lesser Potion", price : 10, tag : "potion"}, //Documents are written in a JSON-esque style
    {a : 2, itemName : "Potion", price : 50, tag : "potion"}, 
    {a : 3, itemName : "Greater Potion", price : 100, tag : "potion"},
    {a : 4, itemName : "Shortsword", price : 90, tag : "sword"},
    {a : 5, itemName : "Longsword", price : 140, tag : "sword"},
    {a : 6, itemName : "Greatsword", price : 220, tag : "sword"},
    {a : 7, itemName : "Uchigatana", price : 350, tag : "sword"},
    {a : 8, itemName : "Leather Armour", price : 60, tag : "armour"},
    {a : 9, itemName : "Chain Mail", price : 120, tag : "armour"},
    {a : 10, itemName : "Half-Plate", price : 200, tag : "armour"},
    {a : 11, itemName : "Full Plate", price : 280, tag : "armour"}
  ], function(err, result) { //Error checking with assert
    assert.equal(err, null);
    assert.equal(11, result.result.n);
    assert.equal(11, result.ops.length);
    console.log("Created the shop collection!");
    callback(result); //Passes back the result
  });
}