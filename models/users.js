//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//New Scheme creation
const usersSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
        required: true
    },
},{ versionKey: false });
const user = mongoose.model('users',usersSchema);

module.exports = user;