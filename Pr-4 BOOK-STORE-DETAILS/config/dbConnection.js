const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb://localhost:27017/node-10am")
        .then(() => console.log('Db is connected !!!'))
        .catch((err) => console.log(err));
}

module.exports = dbConnect;