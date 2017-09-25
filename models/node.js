var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/Tapp';

var node = function node(data)
{
  this.index = () => {
    MongoClient.connect(url, function(err, db)
    {
      assert.equal(null, err);
      var collection = db.collection('nodes');
      //...
      db.close();
    });
  };

  this.owner = {name : data.owner.name, phone : data.owner.phone};
  this.list = [{names : "", numbers : ""}];
  this.indices : (this.list) => {
    //...
  };
};

var insertNode = function(db, callback)
{
  var collection = db.collection('nodes');
  collection.insertOne(node, function(err, result) {
    assert.equal(err, null);
    //...
    console.log("Inserted object into the document collection");
    callback(result);
  });
}



module.exports = dbs;
