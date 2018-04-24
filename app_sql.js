const express = require('express')
const app = express()
require('dotenv').config()
// 
bodyParser = require('body-parser'),
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json 
app.use(bodyParser.json())
// const models = require('./models');
const Models = require('./Models_sql/connect');

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
// find one SELECT * FROM user WHERE id = $1
app.get('/ducdn/:id',async function(req, res){ 
    const query = `SELECT * FROM ${process.env.PGDATABASE} WHERE id =${req.params.id}`;
    try {
        const data = await Models(query) ;
        res.json(data.rows);
    }
    catch(err){ console.log("err get by id",err) }
});
// find all
app.get('/ducdn',async (req, res)=> {
    const query = `SELECT * FROM ${process.env.PGDATABASE}`;
    try {
        const data = await Models(query) ;
        res.json(data.rows);
    }
    catch(err){ console.log("err get all",err) }
});
// creact one
app.post('/ducdn',async function(req, res){
    const  {name=null,price=null,url=null} = req.body, 
    query = `INSERT INTO ${process.env.PGDATABASE}(name, price, url) VALUES('${name}', ${price} , '${url}') RETURNING *`; 
    try {
        const data = await Models(query) ;
        res.json(data.rows);
    }
    catch(err){ console.log("err post ",err) }
});
// delete 'DELETE FROM items WHERE id=($1)'
app.delete('/ducdn/:id',async function(req, res){
    const query = `DELETE FROM ${process.env.PGDATABASE} WHERE id =${req.params.id} RETURNING *`;
    try {
        const data = await Models(query) ;
        res.json(data.rows);
    }
    catch(err){ console.log("err delete",err) }
});
// update UPDATE items SET text=($1), complete=($2) WHERE id=($3)
app.put('/ducdn/:id',async function(req, res){
    const data = [];
    for (const key in req.body)  data.push(` ${key} = '${req.body[key]}'`)
    query = `UPDATE ${process.env.PGDATABASE} SET${data.join(',')}  WHERE id =${req.params.id} RETURNING *`;
    try {
        const data = await Models(query) ;
        res.json(data.rows);
    }
    catch(err){ console.log("err update ",err) }
});

//   
app.listen(process.env.POST_sql,()=>console.log("run with postgresql on post " +process.env.POST_sql ))