var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Tapp';

var node = function node()
{
  this.index = () => {};
  this.owner = {};
  this.list = [{names : "", numbers : ""}];
  this.indices : (this.list) => {};
};

MongoClient.connect(url, function(err, db)
{
  assert.equal(null, err);
  console.log("Connected correctly to server");
  db.close();
});

var insertNode = function(db, callback)
{
  var collection = db.collection('documents');

  collection.insertOne(node, function(err, result) {
    assert.equal(err, null);
    //assert.equal(3, result.result.n);
    //assert.equal(3, result.ops.length);
    console.log("Inserted object into the document collection");
    callback(result);
  });
}

var 

module.exports = dbs;
