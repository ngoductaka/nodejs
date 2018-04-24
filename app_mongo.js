const express = require('express')
const app = express()
require('dotenv').config()

// 
bodyParser = require('body-parser'),
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
// 
// const models = require('./models');
const Models = require('./Models');

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//you must first call storage.init

// ================= =======================sale phone ============================================
app.use('/ducdn', function (req, res, next) {
    console.log(' method: ',req.method)
    if('POST'===req.method){ 
        if(!(/[\w]+/.test(req.body.name) && /[\d]+/.test(req.body.cost))) {
            res.send("form err");
            return 1;
        }
    }
    else if('GET'===req.method){ }
    else if('PUT'===req.method){ 
        const id = req.body.id,
              name = req.body.name,
              cost = req.body.cost;

        if(!id) {
            res.send("cant read id propoty ");
            return 1;
        }
        else if (!name&&!cost){
            res.send("name and cost is empty ");
            return 1;
        }
    }
    else if('DELETE'===req.method){  }
    next()
})
// find one
app.get('/ducdn/:id',function(req, res){
    const getData = Models.getData;
    getData(req.params.id) 
    .then(  data =>  res.json(data)   )
    .catch( err  =>  console.log(err) )
});
// find all
app.get('/ducdn',async (req, res)=> {
    try {
        const getData = Models.getData;
        let data = await getData(req.params.id) ;
        res.json(data);
    }
    catch(err){
        console.log("err",err);
    }
});
// creact one
app.post('/ducdn',function(req, res){
    const saveData = Models.saveData,
     name = req.body.name,
     cost = +req.body.cost;
     saveData({
        "name":  name,
        "cost":  cost
    })
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    
    // res.redirect("http://localhost:3000/dnd");
});
// delete
app.delete('/ducdn/:id',function(req, res){
    const deleteData = Models.deleteData;
     deleteData(req.params.id)
     .then(data=>res.send(data))
    // console.log(req.params.id);
});
// update
app.put('/ducdn',function(req, res){
    // console.log(req.body);
    const updateData = Models.updateData;
    const id = req.body.id
    const name = req.body.name
    const cost = req.body.cost
    updateData({
        "id": id,
        "name": name,
        "cost": cost
    })
    .then(data=>{
        console.log(data);
        res.send(data);
    })
    // res.send(1);
});

//   
app.listen(process.env.POST_mongo,()=>console.log("run with mongoo on post " +process.env.POST_mongo ))