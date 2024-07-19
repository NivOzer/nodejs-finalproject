//Niv Ozer, id: 208993329
//Omri Shema, id: 313380479
//requirements
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const Schema = mongoose.Schema;

// New Schema creation
const usersSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
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
}, { versionKey: false });

const User = mongoose.model('users', usersSchema);

module.exports = User;
