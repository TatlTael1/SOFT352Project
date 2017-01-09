var express = require('express'); //Require ExpressJS
var app = express(); //Set the variable app to the express function, so all the express functions can be used
var path = require('path'); //Require the current path
var bodyParser = require('body-parser'); //Require body-parser, an extension of Express
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
})); // support encoded bodies

app.use(express.static(path.join(__dirname + '/'))); //Use the current directory so all files can be loaded

//The GETs
app.get('/', function (req, res) { //When the user requests the root...
  res.sendFile(path.join(__dirname + '/index.html')); //...give them the homepage
})

app.get('/getShop', function (req, res) { //When the getShop is requested...
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    findDocuments(db, function () {
      db.close();
    });
  });
  var findDocuments = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('shop');
    // Find some documents
    collection.find({}).toArray(function (err, docs) { //Add something between curly brackets to filter search
      assert.equal(err, null);
      console.log("Found the following records"); //Print to the server console
      console.log(docs); //All the documents that have been found
      res.send(docs); //Send back to the client the found documents
    });
  }
})

app.post('/getGE', function(req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    findDocuments(db, function () {
      db.close();
    });
  });
  
  var findDocuments = function (db, callback) {
    var collection = db.collection('users');
    collection.findOne({
      Username: req.body.username
    }, function(err, user) {
      res.send(user);
    })
  }
})

//The POSTs
app.post('/getCharacter', function(req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    getCharacter(db, function () {
      db.close();
    });
  });
  
  var getCharacter = function (db, callback) {
    var collection = db.collection('users');
    
    collection.findOne({
      Username: req.body.username
    }, function (err, user) {
       res.send(user);
    })
  }
})

app.post('/register', function (req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    registerUser(db, function () { //Call the register user function
      db.close();
    });
  });
  var registerUser = function (db, callback) {
    // Get the documents collection
    var collection = db.collection('users');
    collection.findOne({ //Search for the entered username in the database, findOne returns null if it isn't successful
      Username: req.body.username //Check against the passed username
    }, function (err, user) {
      if (user) { //If a user is found, i.e. fineOne isn't null...
        res.status(409).send("Username already exists!"); //Pass a conflict error to the client, with the message
      } else { //If the user doesn't exist, i.e. findOne is null...
        // Insert the document
        collection.insertOne({ //Insert the username and password into the database
          Username: req.body.username, 
          Password: req.body.password,
          character: { //Insert the character details as an array
            maxHitPoints: 100,
            hitPoints: 100,
            level: 1,
            attack: 5,
            armour: 3,
            gold: 0,
            exp: 0,
            items: {}
              
            }
        }, function (err, result) { //Error check and then log the result
          assert.equal(err, null);
          console.log("Registered successfully!");
          console.log(result);
          res.send(result); //Send the result back to the client
        });
      }
    })
  }
})

app.post('/login', function (req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    loginUser(db, function () { //Call the register user function
      db.close();
    });
  });
  
  var loginUser = function (db, callback) {
    var collection = db.collection('users');
    collection.findOne({
      Username: req.body.username
    }, function (err, user) {
      if(user) {
        if(user.Password === req.body.password) {
          res.send(user);
        } else {
          res.status(400).send("Username/Password incorrect!");
        }
      } else {
        res.status(400).send("Username/Password incorrect!");
      }
    })
  }
})

app.post('/earnReward', function (req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    gainReward(db, function () { //Call the register user function
      db.close();
    });
  });
  
  var gainReward = function (db, callback) {
    var collection = db.collection('users');
    collection.findOneAndUpdate(
      {"Username": req.body.username},
      {$inc:{ "character.gold": parseInt(req.body.goldEarned), "character.exp": parseInt(req.body.expEarned)}}
    )
    res.send("Done");
  }
})

app.post('/buyItem', function(req, res) {
  var MongoClient = require('mongodb').MongoClient //Require the database and assert
    
    , assert = require('assert');
  // Connection URL
  var url = 'mongodb://localhost:27017/SOFT352Project';
  // Use connect method to connect to the server
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    buyItems(db, function () { //Call the register user function
      db.close();
    });
  });
  
  var buyItems = function (db, callback) {
    var collection = db.collection('users');
    collection.findOne({
      "Username": req.body.username
    }, function(err, user) {
      if(user.character.gold >= req.body.price) {
        itemName = req.body.item;
        action = {};
        action[itemName] = null;
        collection.findOne(
          action
        , function (err, find) {
          if(find == null) {
            newGold = user.character.gold - req.body.price;
            collection.updateOne({
              "Username": req.body.username 
          }, {$set: {"character.gold": newGold }, $addToSet: {"character.items": {[itemName]: 1}}})
          res.send(find);
          } else {
            findItem = "character.items." + itemName;
            update = {};
            update[findItem] = 1;
            newGold = user.character.gold - req.body.price;
            collection.update({
              "Username": req.body.username
          }, {$set: {"character.gold": newGold }, $inc: update})
          res.send(find);
          }
        })
      } else {
        res.status(400).send("You can't afford that!");
      }
    })
  }
})

app.listen(8080, function () { //Listen on port 8080
  console.log('Listening on port 8080!'); //Log that the server is listening to port 8080
})