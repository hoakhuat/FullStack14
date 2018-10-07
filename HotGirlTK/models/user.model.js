const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const Schema = mongoose.Schema;

const UserModel = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    name: { type: String, default: '' },
    avatar: { type: String, default: '' },
    gender: { type: String, default: '' }
})

UserModel.pre('save', function (next) {
    if (this.isModified('password')) {
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(this.password, salt);

        this.password = hashPassword;
    }

    next();
})

module.exports = mongoose.model('User', UserModel);