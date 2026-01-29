const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String
    },
    adminImage: {
        type: String
    }
});
module.exports = mongoose.model('admin', adminSchema);