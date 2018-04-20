var phone = require('./connect.js');

function getData(data={}) {

    const newphone = new phone({
        "id": data.id,
        "name": data.name,
        "cost": data.cost
    });
    newphone.save(function(err, ok){
        if(err) console.log("err save",err);
        // else {
        //     // res.redirect('/map');
        //     // console.log(ok)
        // }
    });
}

module.exports = getData;