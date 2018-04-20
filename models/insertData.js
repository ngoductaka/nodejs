var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
const getData = require('./getData');

function insertData(data={}){
    getData().then(
        (len)=>{
            // console.log(data,data.length);
            MongoClient.connect(url, function(err, db) {
                if (err) throw err;
                var dbo = db.db("MyDb");
                var myobj = {
                    "id": len.length+1,
                    "name": data.name,
                    "cost": data.cost
                };
        
                dbo.collection("phone").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    console.log("1 document inserted");
                    db.close();
                });
            });
        }
    )
    
}

module.exports = insertData;

