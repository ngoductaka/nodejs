const phone = require('./connect'); 
const getData = require('./get');

module.exports = (data={}) => {
    return getData()
    .then(len=>{
        // console.log(len);
        const newphone = new phone({
            "id": len.length+1,
            "name": data.name,
            "cost": data.cost
        });
        return newphone.save()
        .then( data=> data )
    })
    .catch(err=>{
        console.log("err save", err);
        return err;
    })
};
 