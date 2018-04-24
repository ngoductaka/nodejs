const phone = require('./connect');

// function get(id=null) {
//     const query = id?{"id":id}:null
//     return phone.find(query);
// }

// module.exports = (id=null) => {
//     const query = id?{"id":id}:null
//     return phone.find(query);
// };

module.exports = async (id=null) => {
    const query = id?{"id":id}:null
    return await phone.find(query);
};