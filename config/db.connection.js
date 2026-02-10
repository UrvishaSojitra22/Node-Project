const mongoose = require('mongoose')

const dbconnect = () => {
    mongoose.connect('mongodb+srv://urvishasojitra:urvishasojitra22121@cluster0.d66cwov.mongodb.net/admin-panel-session')
        .then(() => console.log('DB is Connected !!!'))
        .catch((error) => console.log(error))
}

module.exports = dbconnect;

