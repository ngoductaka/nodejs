const { Pool, Client } = require('pg')
require('dotenv').config()

const client = new Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});
client.connect();

module.exports = async (sql)=>{
    try{ 
        return await client.query(sql)
     }
    catch(e){ 
        console.error('err connect',e.stack);
        return e;
    }
}