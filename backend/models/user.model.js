const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var uniqueValidator = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

let UserSchema = new Schema({
    username: {type: String, lowercase: true, required: [true, "Please enter a username"], match: [/^[a-zA-Z0-9]+$/, 'invalid'], index: true},
    hash: String,
    salt: String
})

UserSchema.plugin(uniqueValidator, {message: 'already taken.'});

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 5000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 5000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJWT = function() {
    var currentDate = new Date();
    var expiration = new Date(currentDate);
    expiration.setDate(currentDate.getDate() + 30); //Expire 30 days in the future
    
    return jwt.sign({
        id: this._id,
        username: this.username,
        expiration: parseInt(expiration.getTime() / 1000),
    }, secret);
};

UserSchema.methods.toAuthJSON = function(){
    return {
        username: this.username,
        token: this.generateJWT(),
    };
};

module.exports = mongoose.model('User', UserSchema);