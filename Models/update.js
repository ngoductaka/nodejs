const phone = require('./connect'); 
const getData = require('./get');

module.exports = (data={}) => {
    const up = {};
    if(data.name) up.name  = data.name;
    if(data.cost) up.cost = data.cost;
    
    return phone.where({id:data.id}).update({ $set: up})
    .then(data =>  data )
};
 