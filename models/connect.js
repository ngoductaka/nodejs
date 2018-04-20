var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MyDb');
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

module.exports = phone;
