const mongoose = require('mongoose');

const dbConnect = () => {
    mongoose.connect("mongodb+srv://urviginoya22121:urvi0369@cluster0.xygsjty.mongodb.net/movie")
        .then(() => console.log('Db is connected !!!'))
        .catch((err) => console.log(err));
}

module.exports = dbConnect;