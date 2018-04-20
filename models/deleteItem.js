var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getData = require('./getData');

function deleteItem(id){
    // console.log(data);
    return MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MyDb");
        var query = { "id":id};
        dbo.collection("phone").remove(query, function(err, obj) {
            if (err) throw err;
            console.log(obj+ " 1 document deleted");
            db.close();
            return 1;
        });
    });
        
    
}

module.exports = deleteItem;

