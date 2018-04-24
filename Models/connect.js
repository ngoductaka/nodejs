require('dotenv').config();
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/MyDb');
// mongoose.connect('mongodb://ducdn:ducdn@ds147459.mlab.com:47459/ducdn');
mongoose.connect(process.env.DB_HOST);

var db = mongoose.connection;

var mapSchema = mongoose.Schema({ 
    id:{
        type: Number,
        // required: true
    },
    name:{
        type: String,
        // required: true
    },
    cost:{
        type: Number,
        // required: true
    },
    
}, { collection : 'phone' });
var phone = mongoose.model('phone', mapSchema);
// console.log(phone);
module.exports = phone;
// export default phone 
