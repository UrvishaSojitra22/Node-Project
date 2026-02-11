const mongoose = require('mongoose')

const dbconnect = () => {
   mongoose.connect('mongodb://127.0.0.1:27017/admin-panel-session')
        .then(() => console.log('DB is Connected !!!'))
        .catch((error) => console.log(error))
}

module.exports = dbconnect;

