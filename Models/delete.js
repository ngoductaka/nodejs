const phone = require('./connect'); 
const getData = require('./get');

// module.exports = (id=null) => {
//     // const p = new phone();
//     return phone.where({id:id}).findOneAndRemove()
//     .then(data=>  data )
// };
 
module.exports = async (id=null) => {
    // const p = new phone();
    return await phone.where({id:id}).findOneAndRemove()
    // .then(data=>  data )
};
 