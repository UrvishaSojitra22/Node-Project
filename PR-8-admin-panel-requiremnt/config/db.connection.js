const mongoose = require('mongoose')

const dbconnect = () => {
    mongoose.connect('mongodb+srv://urviginoya:urvisha@cluster0.xygsjty.mongodb.net/adminpanel')
        .then(() => console.log('DB is Connected !!!'))
        .catch((error) => console.log(error))
}

module.exports = dbconnect;

