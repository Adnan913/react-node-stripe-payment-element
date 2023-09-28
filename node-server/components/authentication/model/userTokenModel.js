const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserTokenSchema = new Schema({
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600 // 1hour        
    } 
});

const UserToken = mongoose.model('UserToken', UserTokenSchema);
module.exports = UserToken;