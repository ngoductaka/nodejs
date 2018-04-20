const express = require('express')
const app = express()
// 
bodyParser = require('body-parser'),
// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
// 
const models = require('./models');
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
    }else if('GET'===req.method){
        
    }else if('PUT'===req.method){
        // console.log(' method: ',req.method)
    }else if('DELETE'===req.method){
        // console.log(' method: ',req.method)
    }
    next()
})
// find one
app.get('/ducdn/:id',function(req, res){
    const getData = models.getData;
    getData(req.params.id) 
    .then((data)=>{
        res.json(data);
        // console.log('get',data);
    }).catch((err)=>console.log(err))
});
// find all
app.get('/ducdn',function(req, res){
    const getData = models.getData;
    getData(req.params.id) 
    .then((data)=>{
        res.json(data);
        // console.log('get',data);
    }).catch((err)=>console.log(err))
});
// creact one
app.post('/ducdn',function(req, res){
    const insertData = models.insertData;
    const name = req.body.name
    const cost = +req.body.cost
    insertData({
        "name":  name,
        "cost":  cost
    });
    // res.redirect("http://localhost:3000/dnd");
    return 1;    
});
// delete
app.delete('/ducdn',function(req, res){
    const deleteItem = models.deleteItem;
    deleteItem(req.body.id);
    return 1;
    // console.log(req.body.id);
});
// update
app.put('/ducdn',function(req, res){
    const deleteItem = models.deleteItem;
    deleteItem(req.body.id);
    console.log(req.body.id);
});

//   
app.listen(5000)