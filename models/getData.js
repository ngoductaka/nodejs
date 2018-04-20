var phone = require('./connect.js');

function getData(id) {
    const query =id?{"id":id }:{};
    const getData = new Promise(
        function (resolve, reject) {
            phone.find(query, function(err, ress) {
                // console.log(ress)
                if(err) console.log("err get data", err);
                resolve(ress);
            })
        }
    );
    return getData
}

module.exports = getData;