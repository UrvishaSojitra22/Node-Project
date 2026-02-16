const mongoose = require('mongoose')

const dbconnect = () => {
    mongoose.connect('mongodb+srv://urviginoya:urvisha@cluster0.xygsjty.mongodb.net/roleapi')
        .then(() => console.log('DB is Connected !!!'))
        .catch((err) => console.log(err))
}

module.exports = dbconnect;